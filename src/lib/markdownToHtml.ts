import { micromark } from "micromark";

export default function markdownToHtml(markdown: string) {
  return micromark(markdown);
}
