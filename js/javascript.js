var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});


// Función para redirigir a base.html en función del ID// Datos de las zonas arqueológicas en formato JSON
const zonasArqueologicasJSON = {
    "chichen-details": {
        titulo: "Chichen Itzá",
        descripcion: "Chichén Itzá es un antiguo sitio arqueológico maya ubicado en la península de Yucatán, México. Es uno de los destinos turísticos más populares de México y ha sido designado como Patrimonio de la Humanidad por la UNESCO desde 1988. Chichén Itzá se desarrolló como una ciudad maya entre los siglos VI y X d.C. Durante este período, se convirtió en un importante centro político, religioso y económico en la región. Más tarde, en el siglo X, Chichén Itzá experimentó una influencia tolteca, lo que se refleja en su arquitectura y cultura.",
        imagenes: [
            "/img/chichenitza.png",
            "/img/ch1.jpg",
            "/img/ch2.jpg",
            "/img/ch3.jpg",
            "/img/ch4.jpg",
            "/img/ch5.jpg"
        ]
    },
    "labna-details": {
        titulo: "Labná",
        descripcion: "Labná significa “casa vieja” y es el nombre que recibe un extraordinario sitio arqueológico localizado en Yucatán, México.Este sitio, al igual que otros ubicados en la Región Puuc, fue de importancia en la época Clásica, pero es probable que el asentamiento se encontrara bajo el dominio de algún sitio que funcionaba como capital regional. Durante época los centros económicos y políticos más importantes de la región fueron: Uxmal, Sayil y Kabah, que junto con Oxkintok, Labná y Nohpat parecen haber controlado la totalidad de la cordillera del Puuc, así como, algunas porciones de las planicies del norte; se presume que el esquema de organización socio-política básica, era el de grandes centros autónomos con una plena organización estatal; parece claro que estos asentamientos centralizaban en un grado muy alto la mayoría de las funciones de la región. El manejo de espacios y elementos en que existió entre las entidades políticas. Cronología: 200 a. C. a 1000",
        imagenSrc: "/img/labna.jpg"
    },
    "xcaret-details": {
        titulo: "Xcaret",
        descripcion: "La zona arqueológica de Xcaret se encuentra en la Riviera Maya, México, como parte del Parque Xcaret. Es un sitio maya con un asentamiento costero del período clásico tardío (siglos XIII-XVI), que fue un importante puerto comercial y parada en la ruta marítima maya. Los visitantes pueden explorar templos, palacios, plataformas y una cancha de pelota maya, rodeados de vegetación tropical. Además, el parque ofrece actividades culturales como danzas tradicionales, música y representaciones teatrales para aprender sobre la historia maya mientras disfrutan de la belleza natural de la Riviera Maya.",
        imagenSrc: "/img/xcaret.png"
    },
    "coba-details": {
        titulo: "Cobá",
        descripcion: "La zona arqueológica de Cobá es un asombroso sitio maya en la península de Yucatán, México. Es famosa por su antigüedad y su red de calzadas que atraviesa la selva. Destacando en el horizonte, la imponente Gran Pirámide Nohoch Mul, la más alta de la región, ofrece vistas impresionantes desde su cima. En medio de la densa vegetación, se encuentran templos, plazas y estelas que cuentan la historia de esta antigua civilización. Cobá es un destino imprescindible para los amantes de la historia y la aventura en plena selva tropical. Su construcción se inició alrededor del año 600 d.C. y tuvo su apogeo durante el período clásico tardío de la civilización maya, que abarca desde aproximadamente el siglo VII hasta el siglo X d.C.",
        imagenSrc: "/img/coba.webp"
    },
    "dxibanche-details": {
        titulo: "Dxibanché",
        descripcion: "Dzibanché una antigua ciudad maya en la península de Yucatán, México, prosperó entre los siglos VI y IX d.C. Su nombre, que significa Escritura en Madera en maya, alude a inscripciones jeroglíficas en madera encontradas en el sitio. Los mayas de Dzibanché destacaron en arquitectura, matemáticas y astronomía, y sus estructuras reflejan una profunda comprensión de eventos astronómicos, como el solsticio de invierno. Los visitantes pueden explorar estas antiguas estructuras y monumentos, sumergiéndose en la rica historia y cultura de la civilización maya en este fascinante sitio arqueológico",
        imagenSrc: "/img/dxibanché.jpg"
    },
    "dzibilchaltun-details": {
        titulo: "Dzibilchaltún",
        descripcion: "Dzibilchaltún es un sitio arqueológico maya de gran importancia en la península de Yucatán, México, que alcanzó su apogeo entre los años 600 y 900 d.C. Destaca por su Pirámide del Adivino y un cenote que fue esencial para la civilización maya. Su cultura se distingue por su avanzado sistema de calzadas que conectaban diferentes estructuras y grupos arqueológicos. Además, se han encontrado valiosos artefactos, como cerámica y esculturas, que arrojan luz sobre la vida y la cultura maya. Dzibilchaltún es un destino turístico que ofrece la oportunidad de explorar antiguas ruinas mayas y aprender sobre su historia en un entorno impresionante en la actualidad.",
        imagenSrc: "/img/dzibilchaltún.jpg"
    },
    "uxmal-details": {
        titulo: "Uxmal",
        descripcion: "Uxmal es un sitio arqueológico maya de renombre en la península de Yucatán, México, que floreció en el período clásico tardío, entre los siglos VI y X d.C. Se distingue por su impresionante arquitectura, incluyendo la Pirámide del Adivino, el Palacio del Gobernador y la Casa de las Palomas, todos adornados con intrincados relieves y diseños geométricos. La cultura de Uxmal demostró un avanzado conocimiento de la ingeniería y la astronomía, evidenciado por la precisa orientación de sus edificios en relación con eventos astronómicos clave. Este sitio es un destino turístico destacado que permite a los visitantes explorar la grandeza de la civilización maya, su arquitectura excepcional y su rica historia en un entorno sorprendente.",
        imagenSrc: "/img/uxmal.jpg"
    },
};

// Función para redirigir a base.html en función del ID y almacenar datos en localStorage
function redirectToDetails(id) {
    const zona = zonasArqueologicasJSON[id];
    if (zona) {
        // Almacenar los datos en localStorage
        localStorage.setItem('titulo', zona.titulo);
        localStorage.setItem('des', zona.descripcion);
        localStorage.setItem('imagenes', zona.imagenes);

        // Redirigir a base.html
        window.location.href = 'base.html';
    }
}

