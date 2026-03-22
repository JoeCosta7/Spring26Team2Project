export function formatGPTResponse(rawResponse) {
    try {
        return JSON.parse(rawResponse) // gpt returns clean JSON
     } catch (err) {
        try {
            const jsonMatch = rawResponse.match(/\{[\s\S]*\}/)

            if (!jsonMatch) {
                throw new Error("No JSON found in GPT response")
            }

            return JSON.parse(jsonMatch[0])
        } catch(parseError) {
            console.error("GPT parsing failed:", parseError);

            return {
                // json of expected response but all values are 0 
                weaknesses: ["Unable to parse GPT response"]
            }
        }
     }
}