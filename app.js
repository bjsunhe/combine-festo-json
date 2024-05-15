const fs = require('fs');
const path = require('path');

const folderPath = '../festo_round_cylinder';

let allProducts=[]


// Function to read all JSON files in a directory
function readJSONFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return console.error('Failed to list directory contents:', err);
        }

        files.forEach((file,index) => {
                if (path.extname(file) === '.json') {
                    const filePath = path.join(directory, file);
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            return console.error('Failed to read file:', filePath, err);
                        }
    
                        try {
                            const jsonData = JSON.parse(data);
                            // let festo_round_cylinder={
                            //     [jsonData[0].key]:jsonData[0].value,
                            //     PistonDiameter:jsonData[1].value,
                            //     Cushioning:jsonData[2].value,
                            //     MountingPosition:jsonData[3].value,
                            //     Design:jsonData[4].value,
                            //     PositionDetection:jsonData[5].value,
                            //     Symbol:jsonData[6].value,
                            //     Variants:jsonData[7].value,
                            //     OperatingPressureMPa:jsonData[8].value,
                            //     OperatingPressureBar:jsonData[9].value,
                            //     ModeOfOperation:jsonData[10].value,
                            //     OperatingMedium:jsonData[11].value,
                            //     NoteOnOperatingAndPilotMedium:jsonData[12].value,
                            //     CorrosionResistanceClassCRC:jsonData[13].value,
                            //     LABS_PWIS_Conformity:jsonData[14].value,
                            //     SuitabilityForTheProductionOfLi_ionBatteries:jsonData[15].value,
                            //     CleanroomClass:jsonData[16].value,
                            //     AmbientTemperature:jsonData[17].value,
                            //     TheoreticalForceAt0_6MPaReturnStroke:jsonData[19].value,
                            //     TheoreticalForceAt0_6MPaAdvanceStroke:jsonData[20].value,
                            //     MovingMassFor0mmStroke:jsonData[21].value,
                            //     AdditionalMovingMassPer10mmStroke:jsonData[22].value,
                            //     BasicWeightFor0mmStroke:jsonData[23].value,
                            //     AdditionalWeightPer10mmStroke:jsonData[24].value,
                            //     TypeOfMounting:jsonData[25].value,
                            //     PneumaticConnection:jsonData[26].value,
                            //     NoteOnMaterials:jsonData[27].value,
                            //     MaterialCover:jsonData[28].value,
                            //     MaterialSeals:jsonData[29].value,
                            //     MaterialPistonRod:jsonData[30].value,
                                
                            //     ProductLink:jsonData[0]['productLink'],
                            //     OrderCode:jsonData[0]['orderCode'],
                            //     Code:jsonData[0]['code'],
                            //     DataSheetLink:jsonData[0]['dataSheetLink'],
                            //     MannualLink:jsonData[0]['manualLink']
                                    
                                    
                            //     }
                            let festo_round_cylinder={};
                            for(let i=0;i<jsonData.length;i++){
                                festo_round_cylinder[jsonData[i].key]=jsonData[i].value
                                
                                    
                            }

                            festo_round_cylinder['ProductLink']=jsonData[0]['productLink']
                            festo_round_cylinder['OrderCode']=jsonData[0]['orderCode']
                            festo_round_cylinder['Code']=jsonData[0]['code']
                            festo_round_cylinder['DataSheetLink']=jsonData[0]['dataSheetLink']
                            festo_round_cylinder['MannualLink']=jsonData[0]['manualLink']
                                

                            

                            allProducts.push(festo_round_cylinder)
                            fs.writeFileSync('festo_round_cylinder.json',JSON.stringify(allProducts))

                        } catch (parseErr) {
                            console.error('Failed to parse JSON:', filePath, parseErr);
                        }
                    });
                }
        });

    });
}

// Call the function with your folder path
readJSONFiles(folderPath);
