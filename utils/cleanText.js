export function cleanText(text) {
    if (!text) return ""

    return text
        .replace(/[^\x00-\x7F]/g, " ") // remove weird unicode chars
        .replace(/\s+/g, " ")  // collapse multiple spaces
        .replace(/\n+/g, "\n") // normalize line breaks
        .trim()
        .slice(0, 12000) // prevent extremely long prompts
}