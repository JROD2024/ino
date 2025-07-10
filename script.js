// Datos de las propiedades (simulando la lectura de archivos)
const properties = [
    {
        folder: "CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO",
        title: "Casa en Venta",
        description: "Casa ubicada en Canchunchú Nuevo frente a la Plaza Alí Primera con 03 Habitaciones, 03 Baños, Cocina, Sala, Comedor, Porche, Estacionamiento con Parrillera, Techo de Platabanda, Piso de Ceramica, con un Área Aproximada de 130Mts2.",
        images: [

            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/2.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/3.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/4.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/5.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/6.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/7.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/8.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/9.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/10.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/11.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/12.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/13.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/14.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/15.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/16.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/17.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/18.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/19.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/20.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/21.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/22.jpg",
            "propiedades/CASA AV. UNIVERITARIA FRENTE LA PLAZA ALI PRIMERA CANCHUNCHU NUEVO/23.jpg"
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
        folder: "EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX",
        title: "Edificio Comercial en Calle Independencia",
        description: "Edificio comercial Ubicado en Calle Independiencia con San Felix, consta de 4 Locales Comerciales y 15 Oficinas, con una Área de Construcción de 1500Mts2.",
        images: [
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/1.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/2.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/3.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/4.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/5.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/6.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/7.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/8.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/9.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/10.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/11.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/12.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/13.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/14.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/15.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/16.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/17.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/18.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/19.jpg",
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SAN FELIX/20.jpg",
            /*"propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114403_294.jpg",
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
            "propiedades/EDIFICIO COMERCIAL CALLE INDEPENDENCIA CON SANFELIZ/IMG_20250708_114650_548.jpg"*/
        ]
    },
    {
        folder: "CASA CALLE JOSÉ FRANCISCO BERMÚDEZ",
        title: "Casa en Calle José Francisco Bermúdez",
        description: "Casa en Calle José Francisco Bermúdez (Entrada del Galpón de la Coca-Cola), con 03 Habitaciones, Sala, Comedor, 02 Baños, Cocina, Estacionamiento, porche y un área aproximada de 130Mts2",
        images: [
            "propiedades/CASA CALLE JOSÉ FRANCISCO BERMÚDEZ/1.jpg",
            "propiedades/CASA CALLE JOSÉ FRANCISCO BERMÚDEZ/2.jpg",
            "propiedades/CASA CALLE JOSÉ FRANCISCO BERMÚDEZ/3.jpg",
           
        ]
    },
  /*  {
        folder: "CASA CALLEJON LOS MORENOS",
        title: "Casa en Callejón Los Morenos",
        description: "Casa tradicional en el pintoresco callejón Los Morenos. Perfecta para quienes aprecian la arquitectura local y la vida de barrio.",
        images: [
            "propiedades/CASA CALLEJON LOS MORENOS/IMG_20250112_160603_849.jpg",
            "propiedades/CASA CALLEJON LOS MORENOS/IMG_20250112_160605_952.jpg",
            "propiedades/CASA CALLEJON LOS MORENOS/IMG_20250112_160609_936.jpg"
        ]
    },*/
   

    {
        folder: "GALPÓN CALLE COLOMBIA",
        title: "Galpón en Calle Colombia",
        description: "Galpón de 450Mts2 con una Oficina, un baño, una habiatación para vigilancia, una cava cuarto de 7 metros X 12 metros operativa (Antiguo deposito helados efe).",
        images: [
            "propiedades/GALPÓN CALLE COLOMBIA/1.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/2.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/3.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/4.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/5.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/6.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/7.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/8.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/9.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/10.jpg",
            "propiedades/GALPÓN CALLE COLOMBIA/11.jpg"



        ]
    },
    {
        folder: "LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA",
        title: "Local Comercial en Calle Juncal, cruce con Calle Güiria",
        description: "Local comercial en la esquina de Calle Juncal cruce con Calle Güiria., dos plantas, una oficina, dos baños, con un área de construcción de 1400Mts2 (Frente la Mansión del Pan) ",
        images: [
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/1.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/2.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/3.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/4.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/5.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/6.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/7.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/8.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/9.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/10.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/11.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/12.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/13.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/14.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/15.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/16.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/17.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/18.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/19.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/20.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/21.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/22.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/23.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/24.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/25.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/26.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/27.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/28.jpg",
            "propiedades/LOCAL COMERCIAL CALLE JUNCAL, CRUCE CON GÜIRIA/29.jpg"
        ]
    },
    {
        folder: "APARTAMENTO EN VENTA, EDIFICIO MARY",
        title: "Apartamento En Venta, Edificio Mary",
        description: "Apartamento de 70 Mts2, 02  habitaciones, Sala, Comedor, 02 Baños, Cocina.",
        images: [
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/1.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/2.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/3.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/4.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/5.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/6.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/7.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/8.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/9.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/10.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/11.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/12.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/13.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/14.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/15.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/16.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/17.jpg",
            "propiedades/APARTAMENTO EN VENTA, EDIFICIO MARY/18.jpg"
        ]
    },
    {
        folder: "TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA",
        title: "Terreno con 2 Frentes",
        description: "Terreno con un área aproaximada de 3200Mts2, ubicado en la Calle Juncal, con salida en Calle Independencia (2 Frentes)",
        images: [
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/1.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/2.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/3.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/4.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/5.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/6.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/7.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/8.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/9.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/10.jpg",
            "propiedades/TERRENO CALLE JUNCAL CON SALIDA EN CALLE INDEPENDENCIA/11.jpg",
        ]
    },
    {
        folder: "TERRENO EN CALLE JUNCAL",
        title: "Terreno de 300 Mts² en Calle Juncal, Frente al antiguo Banco del Sur",
        description: "Terreno de 300 Mts² ubicado cerca de la Mansión del Pan. Al frente de donde quedaba el Banco del Sur.",
        images: [
            "propiedades/TERRENO EN CALLE JUNCAL/1.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/2.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/3.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/4.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/5.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/6.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/7.jpg",
            "propiedades/TERRENO EN CALLE JUNCAL/8.jpg"
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
                    <h3>Galería de Fotos (Haga clic en la foto para verla en su tamaño original)</h3>
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