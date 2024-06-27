import fs from 'fs/promises'
import path from 'path'

export async function getProducts() {
    const filePath=path.join(process.cwd(),'public','products.json')
    const jsonData=await fs.readFile(filePath,'utf-8')
    return JSON.parse(jsonData)
}