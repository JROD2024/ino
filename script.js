// Datos de las propiedades (simulando la lectura de archivos)
const properties = [
    {
        folder: "CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO",
        title: "Casa en Avenida Universitaria",
        description: "Hermosa casa ubicada frente a la Plaza Ali Primera en Canchunchu Nuevo. Excelente ubicación con fácil acceso a servicios y transporte público.",
        images: [
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250105_142947_557.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250105_145103_560.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130052_869.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130108_284.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130116_810.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130128_938.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130153_605.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130203_483.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130211_762.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130238_248.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130240_811.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130243_063.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130256_533.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130257_805.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130339_428.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130342_380.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130351_886.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130410_630.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130414_946.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130420_778.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130427_983.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130453_062.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130457_055.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130519_593.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130520_900.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130526_358.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130539_950.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130541_947.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130544_568.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130609_700.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130612_199.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130621_897.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130625_401.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130635_818.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130641_205.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130951_887.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_130952_817.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_131330_431.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_131336_218.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_131340_579.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/IMG_20250106_131349_140.jpg"
        ]
    },
    {
        folder: "CASA CALLE JFB",
        title: "Casa en Calle JFB",
        description: "Acogedora casa ubicada en calle JFB. Ideal para familias que buscan tranquilidad y comodidad en una zona residencial.",
        images: [
            "propiedades/CASA CALLE JFB/IMG_20250112_113608_878.jpg",
            "propiedades/CASA CALLE JFB/IMG_20250112_113616_293.jpg",
            "propiedades/CASA CALLE JFB/IMG_20250112_113629_737.jpg",
            "propiedades/CASA CALLE JFB/IMG_20250112_113640_011.jpg"
        ]
    },
    {
        folder: "CASA CALLEJON LOS MORENOS",
        title: "Casa en Callejón Los Morenos",
        description: "Casa tradicional en el pintoresco callejón Los Morenos. Perfecta para quienes aprecian la arquitectura local y la vida de barrio.",
        images: [
            "propiedades/CASA CALLEJON LOS MORENOS/IMG_20250112_160603_849.jpg",
            "propiedades/CASA CALLEJON LOS MORENOS/IMG_20250112_160605_952.jpg",
            "propiedades/CASA CALLEJON LOS MORENOS/IMG_20250112_160609_936.jpg"
        ]
    },
    {
        folder: "CASA Y TERRENO, CALLE FIGUERAS",
        title: "Casa y Terreno en Calle Figueras, Sector Los Cocos",
        description: "Casa y Terreno, 3 Habitaciones, 2 Baños, Sala Cocina, Comedor, Porche, Tech de Plata Banda y Enrejado. Superfice de Terreno de 600Mts2 y área de construcción de 150Mts2.",
        images: [
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/1.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/2.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/3.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/4.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/5.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/6.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/7.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/8.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/9.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/10.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/11.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/12.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/13.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/14.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/15.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/16.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/17.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/18.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/19.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/20.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/21.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/22.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/23.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/24.jpg",
            /*"propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160343_589.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160357_876.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160359_078.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160404_342.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160418_131.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160419_247.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160420_444.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160433_074.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160435_119.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160436_000.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160446_473.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160502_520.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160506_323.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160517_817.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160523_511.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160529_220.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160533_243.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160539_126.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160550_800.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160609_539.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160613_844.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160703_499.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160706_983.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160716_709.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160725_748.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160728_426.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160731_049.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160731_925.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160749_172.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160750_182.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160759_864.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160809_697.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160818_239.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160819_283.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160827_016.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160827_742.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160833_507.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160838_391.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160843_821.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160846_050.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160850_356.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160901_594.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160902_334.jpg",
            "propiedades/CASA Y TERRENO, CALLE FIGUERAS/IMG_20240905_160455_545.jpg"*/
        ]
    },
    {
        folder: "EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ",
        title: "Edificio Comercial en Calle Independencia",
        description: "Edificio comercial estratégicamente ubicado en la intersección de Independencia y Sanfeliz. Excelente para negocios y oficinas.",
        images: [
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114111_759.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114117_610.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114123_034.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114130_751.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114137_351.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114142_219.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114150_039.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114155_004.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114202_446.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114207_234.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114219_017.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114228_410.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114238_402.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114239_875.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114248_951.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114313_690.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114321_093.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114330_258.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114338_789.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114350_521.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114403_294.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114418_216.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114419_999.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114437_420.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114442_796.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114454_700.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114505_361.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114514_428.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114523_056.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114530_755.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114538_719.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114613_466.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114650_548.jpg"
        ]
    },
    {
        folder: "GALPON CALLE COLOMBIA",
        title: "Galpón en Calle Colombia",
        description: "Espacioso galpón industrial en calle Colombia. Perfecto para almacenamiento, talleres o conversión a uso comercial.",
        images: [
            "propiedades/GALPON CALLE COLOMBIA/IMG_20240929_131429_825.jpg",
            "propiedades/GALPON CALLE COLOMBIA/IMG_20241004_140656_735.jpg",
            "propiedades/GALPON CALLE COLOMBIA/IMG_20241009_120057_554.jpg",
            "propiedades/GALPON CALLE COLOMBIA/IMG_20241009_120102_437.jpg",
            "propiedades/GALPON CALLE COLOMBIA/IMG_20241009_120113_757.jpg"
        ]
    },
    {
        folder: "LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA",
        title: "Local Comercial en Calle Juncar",
        description: "Local comercial en excelente ubicación, esquina de Juncar con Guiria. Alto tráfico peatonal, ideal para cualquier tipo de negocio.",
        images: [
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_112958_619.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113005_242.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113011_222.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113015_500.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113020_496.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113026_839.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113034_332.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113044_194.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113051_388.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113054_911.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113103_140.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113111_247.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113116_122.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113127_488.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113135_885.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113137_181.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113143_739.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113145_169.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113154_489.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113159_428.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113203_665.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113217_502.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113227_196.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113229_264.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113242_001.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113309_384.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113322_318.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113331_291.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113332_345.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113351_919.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113401_589.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113421_656.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113429_731.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113438_170.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAR CON GUIRIA/IMG_20250708_113504_577.jpg"
        ]
    },
    {
        folder: "Propiedad 1",
        title: "Apartamento En Venta",
        description: "Edificio Mary - Apartamento completamente amueblado y equipado. Ubicado en zona céntrica con fácil acceso a todos los servicios.",
        images: [
            "propiedades/Propiedad 1/IMG_20250509_115703_860.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115704_260.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115706_937.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115709_984.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115715_405.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115715_845.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115717_774.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115721_451.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115723_840.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115726_801.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115730_002.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115738_922.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115739_378.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115741_829.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115746_840.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115748_369.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115755_418.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115757_690.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115758_605.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115803_584.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115803_989.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115805_702.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115812_758.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115813_419.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115818_467.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115822_153.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115826_681.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115827_551.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115838_665.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115847_091.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115859_805.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115900_531.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115907_821.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115912_952.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115914_558.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115919_149.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115920_027.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115945_893.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115947_893.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115956_083.jpg",
            "propiedades/Propiedad 1/IMG_20250509_115957_002.jpg",
            "propiedades/Propiedad 1/IMG_20250509_120138_648.jpg",
            "propiedades/Propiedad 1/IMG_20250509_120150_387.jpg",
            "propiedades/Propiedad 1/IMG_20250509_120150_992.jpg"
        ]
    },
    {
        folder: "TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES",
        title: "Terreno con 2 Frentes",
        description: "Terreno estratégico con doble frente en calle Juncal e Independencia. Excelente para desarrollo comercial o residencial.",
        images: [
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120021_584.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120022_435.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120049_286.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120056_556.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120059_822.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120400_927.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120402_544.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120414_420.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120417_600.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120450_057.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120459_962.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120501_613.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120505_908.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120524_262.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120525_496.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON INDEPENDENCIA 2 FRENTES/IMG_20250708_120534_214.jpg"
        ]
    },
    {
        folder: "TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN",
        title: "Terreno 300m² en Calle Juncal",
        description: "Terreno de 300 metros cuadrados ubicado cerca de la Mansión del Pan. Zona en desarrollo con gran potencial de plusvalía.",
        images: [
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094050_045.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094051_447.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094102_617.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094104_039.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094108_250.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094121_380.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094122_697.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL 300M2 - CERCA DE LA MANSIÓN DEL PAN/IMG_20250708_094126_625.jpg"
        ]
    }
];

// Función para mostrar la página principal
function showMainPage() {
    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="container">
            <div class="properties-grid" id="propertiesGrid">
                ${properties.map((property, index) => `
                    <div class="property-card" onclick="showPropertyDetail(${index})">
                        <img src="${property.images[0]}" alt="${property.title}" class="property-image" onerror="this.style.display='none'">
                        <div class="property-info">
                            <h3 class="property-title">${property.title}</h3>
                            <p class="property-folder">${property.folder}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Variables globales para el modal
let currentImages = [];
let currentImageIndex = 0;

// Función para mostrar el detalle de una propiedad
function showPropertyDetail(propertyIndex) {
    const property = properties[propertyIndex];
    const main = document.querySelector('.main');
    
    // Guardar las imágenes actuales para el modal
    currentImages = property.images;
    
    main.innerHTML = `
        <div class="container">
            <div class="property-detail">
                <div class="property-detail-header">
                    <h2 class="property-detail-title">${property.title}</h2>
                    <p class="property-detail-description">${property.description}</p>
                    <a href="#" class="back-button" onclick="showMainPage()">← Volver a Propiedades</a>
                </div>
                <div class="property-gallery">
                    <h3>Galería de Fotos</h3>
                    <div class="gallery-grid">
                        ${property.images.map((image, index) => `
                            <img src="${image}" alt="${property.title}" class="gallery-image" 
                                 onclick="openModal(${index})" onerror="this.style.display='none'">
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Funciones para el modal de imágenes
function openModal(imageIndex) {
    currentImageIndex = imageIndex;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = currentImages[imageIndex];
    modal.style.display = 'block';
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    // Navegación circular
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    modalImage.src = currentImages[currentImageIndex];
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Cerrar modal haciendo clic fuera de la imagen
document.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.querySelector('.modal-content');
    
    if (event.target === modal && event.target !== modalContent) {
        closeModal();
    }
});

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    showMainPage();
}); 