import { QAItem } from "./types";

// Search functionality - returns empty for Homepage (no content.json)
export function searchContent(query: string): { category: string; item: QAItem; relevance: number }[] {
  return [];
}
