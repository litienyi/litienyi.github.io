
import { read, writeFileXLSX } from "xlsx";
var XLSX = require("xlsx");


const workbook = XLSX.read("sampledata.xlsx");
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(worksheet);

console.log(data)