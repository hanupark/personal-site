export type ContentBlock =
  | { type: "text"; value: string }
  | { type: "image"; url: string }
  | { type: "quote"; value: string }
  | { type: "link"; url: string; title?: string }
  | { type: "audio"; url: string }
  | { type: "video"; url: string };

export interface Post {
  id: number;
  title?: string;
  description?: string;
  content: ContentBlock[];
  tags?: string[];
  created_at: string;
}
