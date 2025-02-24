import { StickyNote } from "@mirohq/websdk-types";

export default async function GetStickyNotes(): Promise<string[]> {
  if (typeof window === "undefined") return [];

  try {
    const selection = await miro.board.getSelection();
    const notes: string[] = [];
    for (const widget of selection) {
      if (widget.type === "sticky_note") {
        const note = widget as StickyNote;
        const content = StripHtmlTags(note.content);
        notes.push(content);
      }
    }
    return notes;
  } catch (error) {
    console.error("Failed to fetch sticky notes:", error);
    return [];
  }
}

function StripHtmlTags(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}
