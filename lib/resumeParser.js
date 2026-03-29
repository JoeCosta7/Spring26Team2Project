// extract text from pdfs 
// not sure how we would redact sensitive infos

import fs from "fs"
import PdfParse from "pdf-parse-new"

export async function parseResume(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const data = await PdfParse(dataBuffer)
        return data.text
    } catch (err) {
        console.error("Failed to parse PDF:", err)
        return null;
    }
}

