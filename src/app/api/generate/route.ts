import { NextRequest, NextResponse } from 'next/server';
import { GenerateResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { videoDescription, includeChapters } = await request.json();

    if (!videoDescription || videoDescription.trim() === '') {
      return NextResponse.json(
        { error: 'Video description is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `You are a helpful AI YouTube content assistant. Based on this short video description, generate the following:

A short and catchy title (max 70 characters)

5–10 SEO-friendly tags

A one-line description for the video

${includeChapters ? 'A list of estimated chapters with time (HH:MM format)' : 'No chapters needed'}

A thumbnail generation prompt for an AI image generator (e.g., "a hiker in sunrise over Himalayas")

Respond in clean JSON with the following keys:

title
tags
description
${includeChapters ? 'chapters (as an array of { time: "00:00", title: "..." })' : ''}
thumbnail_prompt

Video Description:
"""
${videoDescription}
"""`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate content' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const content = data.content[0].text;
    
    // Extract JSON from the response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: 'Invalid response format from AI' },
        { status: 500 }
      );
    }

    const generatedContent: GenerateResponse = JSON.parse(jsonMatch[0]);

    return NextResponse.json(generatedContent);
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 