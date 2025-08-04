# YouTube Content Generator

A full-stack AI web application that helps YouTubers automatically generate optimized content for their videos using Claude AI.

## Features

- **AI-Powered Content Generation**: Uses Claude AI to generate:
  - Catchy, SEO-optimized video titles
  - 5-10 relevant tags for better discoverability
  - One-line video descriptions
  - Estimated chapters with timestamps
  - Thumbnail generation prompts

- **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS
- **Copy-to-Clipboard**: Easy copying of individual elements or all content at once
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Validation**: Form validation and error handling

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **AI Integration**: Claude AI API (Anthropic)
- **Styling**: Tailwind CSS for modern, responsive design
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Claude AI API key from Anthropic

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd youtube-ai-generator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Claude AI API key:
```
ANTHROPIC_API_KEY=your_claude_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Enter Video Description**: Describe your video content in the textarea
2. **Choose Options**: Toggle whether to generate chapters with timestamps
3. **Generate Content**: Click the "Generate Content" button
4. **Copy Results**: Use the copy buttons to copy individual elements or all content at once

## API Endpoints

### POST `/api/generate`

Generates YouTube content using Claude AI.

**Request Body:**
```json
{
  "videoDescription": "Your video description here",
  "includeChapters": true
}
```

**Response:**
```json
{
  "title": "Generated video title",
  "tags": ["tag1", "tag2", "tag3"],
  "description": "One-line video description",
  "chapters": [
    {
      "time": "00:00",
      "title": "Chapter title"
    }
  ],
  "thumbnail_prompt": "AI image generation prompt"
}
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for content generation
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
└── components/
    ├── ContentForm.tsx           # Main form component
    └── ContentResult.tsx         # Results display component
```

## Environment Variables

- `ANTHROPIC_API_KEY`: Your Claude AI API key from Anthropic

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `ANTHROPIC_API_KEY` to Vercel environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
