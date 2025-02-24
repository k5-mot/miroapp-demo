export function TruncateString(text: string, maxLength: number = 50): string {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
