```sql

CREATE TABLE `festo_compact_cylinder` (
  `stroke` VARCHAR(255) COMMENT 'Stroke',
  `pistonDiameter` VARCHAR(255) COMMENT 'Piston diameter',
  `pistonRodThread` VARCHAR(255) COMMENT 'Piston rod thread',
  `cushioning` VARCHAR(255) COMMENT 'Cushioning',
  `mountingPosition` VARCHAR(255) COMMENT 'Mounting position',
  `conformsToStandard` VARCHAR(255) COMMENT 'Conforms to standard',
  `piston_rodEnd` VARCHAR(255) COMMENT 'Piston-rod end',
  `positionDetection` VARCHAR(255) COMMENT 'Position detection',
  `symbol` VARCHAR(255) COMMENT 'Symbol',
  `variants` VARCHAR(255) COMMENT 'Variants',
  `operatingPressure` VARCHAR(255) COMMENT 'Operating pressure',
  `modeOfOperation` VARCHAR(255) COMMENT 'Mode of operation',
  `operatingMedium` VARCHAR(255) COMMENT 'Operating medium',
  `noteOnOperatingAndPilotMedium` VARCHAR(255) COMMENT 'Note on operating and pilot medium',
  `corrosionResistanceClassCrc` VARCHAR(255) COMMENT 'Corrosion resistance class CRC',
  `labs_pwis_Conformity` VARCHAR(255) COMMENT 'LABS (PWIS) conformity',
  `ambientTemperature` VARCHAR(255) COMMENT 'Ambient temperature',
  `impactEnergyInEndPositions` VARCHAR(255) COMMENT 'Impact energy in end positions',
  `theoreticalForceAt0_6Mpa_6Bar_87Psi__ReturnStroke` VARCHAR(255) COMMENT 'Theoretical force at 0.6 MPa (6 bar, 87 psi), return stroke',
  `theoreticalForceAt0_6Mpa_6Bar_87Psi__AdvanceStroke` VARCHAR(255) COMMENT 'Theoretical force at 0.6 MPa (6 bar, 87 psi), advance stroke',
  `movingMass` VARCHAR(255) COMMENT 'Moving mass',
  `productWeight` VARCHAR(255) COMMENT 'Product weight',
  `typeOfMounting` VARCHAR(255) COMMENT 'Type of mounting',
  `pneumaticConnection` VARCHAR(255) COMMENT 'Pneumatic connection',
  `noteOnMaterials` VARCHAR(255) COMMENT 'Note on materials',
  `materialCollarScrews` VARCHAR(255) COMMENT 'Material collar screws',
  `materialCover` VARCHAR(255) COMMENT 'Material cover',
  `materialSeals` VARCHAR(255) COMMENT 'Material seals',
  `materialPistonRod` VARCHAR(255) COMMENT 'Material piston rod',
  `materialCylinderBarrel` VARCHAR(255) COMMENT 'Material cylinder barrel',
  `productpageheadline` VARCHAR(255) COMMENT 'productPageHeadline',
  `ordercode` VARCHAR(255) COMMENT 'orderCode',
  `code` VARCHAR(255) COMMENT 'code',
  `gtin` VARCHAR(255) COMMENT 'gtin',
  `datasheetlink` VARCHAR(255) COMMENT 'dataSheetLink',
  `manuallink` VARCHAR(255) COMMENT 'manualLink',
  `productlink` VARCHAR(255) COMMENT 'productLink',
  `cushioningLength` VARCHAR(255) COMMENT 'Cushioning length',
  `design` VARCHAR(255) COMMENT 'Design',
  `ceMark_seeDeclarationOfConformity_` VARCHAR(255) COMMENT 'CE mark (see declaration of conformity)',
  `ceMarking_seeDeclarationOfConformity_` VARCHAR(255) COMMENT 'CE marking (see declaration of conformity)',
  `explosionProtection` VARCHAR(255) COMMENT 'Explosion protection',
  `atexCategoryGas` VARCHAR(255) COMMENT 'ATEX category gas',
  `atexCategoryDust` VARCHAR(255) COMMENT 'ATEX category dust',
  `explosionIgnitionProtectionTypeForGas` VARCHAR(255) COMMENT 'Explosion ignition protection type for gas',
  `explosionIgnitionProtectionTypeForDust` VARCHAR(255) COMMENT 'Explosion ignition protection type for dust',
  `explosionAmbientTemperature` VARCHAR(255) COMMENT 'Explosion ambient temperature',
  `suitabilityForTheProductionOfLi_ionBatteries` VARCHAR(255) COMMENT 'Suitability for the production of Li-ion batteries',
  `additionalWeightPerPistonRodExtensionOf10Mm` VARCHAR(255) COMMENT 'Additional weight per piston rod extension of 10 mm',
  `additionalWeightPerPistonRodThreadExtensionOf10Mm` VARCHAR(255) COMMENT 'Additional weight per piston rod thread extension of 10 mm',
  `basedOnStandard` VARCHAR(255) COMMENT 'Based on standard',
  `cleanroomClass` VARCHAR(255) COMMENT 'Cleanroom class'
);



```