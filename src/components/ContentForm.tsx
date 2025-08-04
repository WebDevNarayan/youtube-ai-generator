"use client";

import { useState } from "react";
import { ContentResult } from "./ContentResult";
import { DemoResult } from "./DemoResult";
import { GenerateResponse } from "@/types";

export default function ContentForm() {
  const [videoDescription, setVideoDescription] = useState("");
  const [includeChapters, setIncludeChapters] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!videoDescription.trim()) {
      setError("Please enter a video description");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoDescription: videoDescription.trim(),
          includeChapters,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate content");
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-[#1f1f1f] rounded-xl shadow-2xl border border-[#383838] p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <svg
                height={20}
                width={20}
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              YouTube Content Generator
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Generate catchy titles, SEO tags, descriptions, and more from your
            video description
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-3"
            >
              Video Description
            </label>
            <textarea
              id="description"
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
              placeholder="Describe your video content here... (e.g., 'I'm making a tutorial about React hooks and state management')"
              className="w-full px-4 py-3 bg-[#272727] border border-[#383838] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none text-white placeholder-gray-500 transition-all duration-200"
              rows={6}
              required
            />
          </div>

          <div className="flex items-center p-4 bg-[#272727] rounded-lg border border-[#383838]">
            <input
              id="chapters"
              type="checkbox"
              checked={includeChapters}
              onChange={(e) => setIncludeChapters(e.target.checked)}
              className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-[#1f1f1f]"
            />
            <label
              htmlFor="chapters"
              className="ml-3 block text-sm text-gray-300"
            >
              Generate chapters with timestamps
            </label>
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center">
                <svg
                  height={20}
                  width={20}
                  className="w-5 h-5 text-red-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1f1f1f] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                <span>Generating content...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <svg
                  height={20}
                  width={20}
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Generate Content
              </div>
            )}
          </button>
        </form>

        {result && <ContentResult result={result} />}
        {!result && !isLoading && <DemoResult />}
      </div>
    </div>
  );
}
