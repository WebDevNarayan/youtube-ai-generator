import { GenerateResponse } from "@/types";

const demoResult: GenerateResponse = {
  title: "10 React Hooks You NEED to Know in 2024",
  tags: [
    "React",
    "JavaScript",
    "Web Development",
    "Programming",
    "Hooks",
    "Frontend",
    "Tutorial",
    "Code",
  ],
  description:
    "Learn the most important React hooks that every developer should master in 2024, with practical examples and real-world use cases.",
  chapters: [
    { time: "00:00", title: "Introduction" },
    { time: "01:30", title: "useState Hook" },
    { time: "05:45", title: "useEffect Hook" },
    { time: "12:20", title: "useContext Hook" },
    { time: "18:15", title: "useReducer Hook" },
    { time: "25:30", title: "Custom Hooks" },
    { time: "32:45", title: "Performance Tips" },
    { time: "38:20", title: "Common Mistakes" },
    { time: "42:10", title: "Best Practices" },
    { time: "45:30", title: "Conclusion" },
  ],
  thumbnail_prompt:
    "A modern React logo with colorful hooks floating around it, clean design with gradient background",
};

export function DemoResult() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="border-t border-[#383838] pt-8">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
            <svg
              height={20}
              width={20}
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Demo Content</h2>
          <span className="ml-3 px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
            Demo
          </span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
            <svg
              height={20}
              width={20}
              className="w-3 h-3 mr-2 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Video Title
          </h3>
          <div className="flex items-center justify-between bg-[#272727] rounded-lg p-4 border border-[#383838]">
            <h1 className="text-xl font-bold text-white">{demoResult.title}</h1>
            <button
              onClick={() => copyToClipboard(demoResult.title)}
              className="text-red-500 hover:text-red-400 text-sm font-medium px-3 py-1 rounded-md hover:bg-red-500/10 transition-colors"
            >
              <svg
                height={20}
                width={20}
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
            <svg
              height={20}
              width={20}
              className="w-3 h-3 mr-2 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            SEO Tags
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {demoResult.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => copyToClipboard(demoResult.tags.join(", "))}
            className="text-blue-500 hover:text-blue-400 text-sm font-medium px-3 py-1 rounded-md hover:bg-blue-500/10 transition-colors"
          >
            Copy all tags
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
            <svg
              height={20}
              width={20}
              className="w-3 h-3 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            Description
          </h3>
          <div className="flex items-start justify-between bg-[#272727] rounded-lg p-4 border border-[#383838]">
            <p className="text-gray-300">{demoResult.description}</p>
            <button
              onClick={() => copyToClipboard(demoResult.description)}
              className="text-green-500 hover:text-green-400 text-sm font-medium ml-4 px-3 py-1 rounded-md hover:bg-green-500/10 transition-colors"
            >
              <svg
                height={20}
                width={20}
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chapters */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
            <svg
              height={20}
              width={20}
              className="w-3 h-3 mr-2 text-purple-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Chapters
          </h3>
          <div className="bg-[#272727] rounded-lg p-4 border border-[#383838]">
            <div className="space-y-3">
              {demoResult.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#1f1f1f] rounded-lg border border-[#383838]"
                >
                  <span className="text-gray-400 font-mono text-sm bg-[#0f0f0f] px-2 py-1 rounded">
                    {chapter.time}
                  </span>
                  <span className="text-gray-200">{chapter.title}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                copyToClipboard(
                  demoResult.chapters
                    .map((ch) => `${ch.time} - ${ch.title}`)
                    .join("\n")
                )
              }
              className="mt-4 text-purple-500 hover:text-purple-400 text-sm font-medium px-3 py-1 rounded-md hover:bg-purple-500/10 transition-colors"
            >
              Copy all chapters
            </button>
          </div>
        </div>

        {/* Thumbnail Prompt */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
            <svg
              height={20}
              width={20}
              className="w-3 h-3 mr-2 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            Thumbnail Prompt
          </h3>
          <div className="flex items-start justify-between bg-[#272727] rounded-lg p-4 border border-[#383838]">
            <code className="text-yellow-400 text-sm font-mono bg-[#1f1f1f] px-3 py-2 rounded border border-[#383838]">
              {demoResult.thumbnail_prompt}
            </code>
            <button
              onClick={() => copyToClipboard(demoResult.thumbnail_prompt)}
              className="text-yellow-500 hover:text-yellow-400 text-sm font-medium ml-4 px-3 py-1 rounded-md hover:bg-yellow-500/10 transition-colors"
            >
              <svg
                height={20}
                width={20}
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copy All Button */}
        <div className="pt-6 border-t border-[#383838]">
          <button
            onClick={() => {
              const allContent = `
Title: ${demoResult.title}

Tags: ${demoResult.tags.join(", ")}

Description: ${demoResult.description}

Chapters:
${demoResult.chapters.map((ch) => `${ch.time} - ${ch.title}`).join("\n")}

Thumbnail Prompt: ${demoResult.thumbnail_prompt}
              `.trim();
              copyToClipboard(allContent);
            }}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#1f1f1f] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center"
          >
            <svg
              height={20}
              width={20}
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Copy All Content
          </button>
        </div>
      </div>
    </div>
  );
}
