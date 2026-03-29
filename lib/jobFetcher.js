// spreadsheet importer
// still need to normalize csv 

const SPREADSHEET_ID = "1sDJ6qs8TSr4DKtxRpzlwqr3J65wS4bmb5TwbXlivM4I"
const SHEETS = [
    { name: "General Engineering", gid: "1936837778"},
    { name: "Electrical Engineering", gid: "1957777476"},
    { name: "Computer Engineering", gid: "1578604499"},
    { name: "Mechanical Engineering", gid: "1358300540"},
    { name: "Computer Science", gid: "1797408575"},
    { name: "Biomedical Engineering", gid: "1890343886"},
    { name: "Industrial Engineering", gid: "126414331"},
    { name: "Data Analytics", gid: "176730906"}
]

export async function fetchAllSheets() {
    try {
        const results = await Promise.all(SHEETS.map(async ({ name, gid}) => {
            const data = await fetchSheet(gid);
            return { name, gid, data}
        }))
        return results
    } catch (err) {
        console.error(err)
    }
}

async function fetchSheet(gid) {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`
    const res = await fetch(url)
    if (!res.ok)
        throw new Error(`Failed to fetch gid=${gid}: ${res.status}`)
    const csv = await res.text()
    return csv
}