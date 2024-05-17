const fs = require('fs');
const path = require('path');

const filePath = `./festo_compact_cylinder.json`;
const filePathOriginalKey='./festo_compact_cylinder_original_key.json'

let mysqlColumns={}
let mysqlColumnsComments={}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error('Failed to read file:', filePath, err);
    }

    try {
        const jsonData = JSON.parse(data);
        
        
        console.log(jsonData.length)
        mysqlColumns=jsonData.reduce((acc,curr)=>({...acc,...curr}),{})

        console.log(Object.keys(mysqlColumns))
        // console.log(mysqlColumns)

        

        

    } catch (parseErr) {
        console.error('Failed to parse JSON:', filePath, parseErr);
    }
});


fs.readFile(filePathOriginalKey, 'utf8', (err, data) => {
    if (err) {
        return console.error('Failed to read file:', filePath, err);
    }

    try {
        const jsonData = JSON.parse(data);
        
        
        console.log(jsonData.length)
        mysqlColumnsComments=jsonData.reduce((acc,curr)=>({...acc,...curr}),{})

        console.log(Object.keys(mysqlColumnsComments))
        // console.log(mysqlColumns)

        

        

    } catch (parseErr) {
        console.error('Failed to parse JSON:', filePath, parseErr);
    }
});
