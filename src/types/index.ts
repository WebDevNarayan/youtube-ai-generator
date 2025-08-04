export interface Chapter {
  time: string;
  title: string;
}

export interface GenerateResponse {
  title: string;
  tags: string[];
  description: string;
  chapters: Chapter[];
  thumbnail_prompt: string;
} 