
import xlsx from 'xlsx'

export class ExcelUtils{

// fileName - filePath
// sheetName
    static getExcelData(filePath: string, sheetName: string){

        // Exception Handling in Typescript
        try{
           const workbook=  xlsx.readFile(filePath)
           const sheet = workbook.Sheets[sheetName]
           const jsonData= xlsx.utils.sheet_to_json(sheet)
           return jsonData
        }
        catch(e){
            console.log(e);
            console.log("File not found");
        }
    }
}


// Annotation
// Tags - smoke, regression
