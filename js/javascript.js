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
        descripcion: "Chichén Itzá, situada en la península de Yucatán, México, es un antiguo y monumental sitio arqueológico maya que floreció entre los siglos VI y X d.C. Su arquitectura asombrosa incluye la icónica Pirámide de Kukulcán, un prodigio de precisión arquitectónica que se utiliza como calendario solar y muestra fenómenos astronómicos durante los equinoccios. Además, el Templo de los Guerreros, con sus columnas y relieves intrincados, es un testimonio de la riqueza artística de los mayas. Este sitio fue un centro político, religioso y económico clave, y su influencia cultural perdura a través de las estructuras, rituales y juegos de pelota que se encuentran aquí. <br><br> Chichén Itzá también se distingue por su fusión cultural, ya que experimentó la influencia tolteca en el siglo X, que se refleja en su arquitectura y arte. Los mayas llevaron a cabo elaborados rituales y ofrendas en el Cenote Sagrado, un pozo natural utilizado para propósitos ceremoniales y religiosos. En 1988, la UNESCO designó a Chichén Itzá como Patrimonio de la Humanidad, reconociendo su importancia en la historia mesoamericana y su legado cultural en la civilización maya. Este sitio arqueológico continúa asombrando a los visitantes con su magnificencia y riqueza histórica.",
        imagenSrc: "/img/chichenitza.png",
        ubicacion: "/img/ubichichen.png",
        hiro:"/3d/pattern-ch1.png"
    },
    "labna-details": {
        titulo: "Labná",
        descripcion: "Labná, que significa casa vieja, es un sitio arqueológico extraordinario ubicado en Yucatán, México. Este sitio es emblemático de la Región Puuc y desempeñó un papel crucial durante la época Clásica de la civilización maya. Aunque Labná pudo haber estado bajo la influencia de una capital regional cercana, no se subestima su importancia en la organización política y económica de la región. <br <br> En la época Clásica, los centros económicos y políticos más destacados en la Región Puuc incluían a Uxmal, Sayil y Kabah, junto con Oxkintok, Labná y Nohpat. Estos centros parecen haber ejercido control sobre la totalidad de la cordillera del Puuc, así como algunas áreas de las llanuras del norte. El sistema de organización socio-política se basaba en grandes centros autónomos con una organización estatal integral. Estos asentamientos centralizaban la mayoría de las funciones regionales, incluyendo la gestión de espacios y recursos.En términos de cronología, Labná existió desde alrededor del año 200 a.C. hasta el año 1000, lo que significa que su legado se extiende por más de ochocientos años de historia maya. Este sitio arqueológico es un testimonio de la compleja organización social y política de la civilización maya en la región de Puuc durante la antigüedad.",
        imagenSrc: "/img/labna.jpg",
        ubicacion: "/img/ubilabna.png",
        hiro:"/3d/pattern-labna.png"
    },
    "xcaret-details": {
        titulo: "Xcaret",
        descripcion: "La zona arqueológica de Xcaret se encuentra en la Riviera Maya, México, como parte del Parque Xcaret. Es un sitio maya con un asentamiento costero del período clásico tardío (siglos XIII-XVI), que fue un importante puerto comercial y parada en la ruta marítima maya. Los visitantes pueden explorar templos, palacios, plataformas y una cancha de pelota maya, rodeados de vegetación tropical. Además, el parque ofrece actividades culturales como danzas tradicionales, música y representaciones teatrales para aprender sobre la historia maya mientras disfrutan de la belleza natural de la Riviera Maya. <br><br> Los mayas en la región de Xcaret y otras áreas costeras del antiguo Yucatán eran expertos navegantes y utilizaban canoas para diversas actividades y propósitos. Algunas de las actividades que los mayas realizaban en canoas en Xcaret y otras áreas costeras incluían comercio, pesca, transporte, rituales y ceremonias religiosas, así como competencias deportivas. Estas canoas desempeñaban un papel fundamental en la vida cotidiana y espiritual de los mayas, permitiéndoles conectarse con el agua y el mar de manera significativa.",
        imagenSrc: "/img/xcaret.png",
        ubicacion: "/img/ubixcaret.png",
        hiro:"/3d/pattern-xcaret.png"
    },
    "coba-details": {
        titulo: "Cobá",
        descripcion: "La zona arqueológica de Cobá es un asombroso sitio maya en la península de Yucatán, México. Es famosa por su antigüedad y su red de calzadas que atraviesa la selva. Destacando en el horizonte, la imponente Gran Pirámide Nohoch Mul, la más alta de la región, ofrece vistas impresionantes desde su cima. En medio de la densa vegetación, se encuentran templos, plazas y estelas que cuentan la historia de esta antigua civilización. Cobá es un destino imprescindible para los amantes de la historia y la aventura en plena selva tropical. Su construcción se inició alrededor del año 600 d.C. y tuvo su apogeo durante el período clásico tardío de la civilización maya, que abarca desde aproximadamente el siglo VII hasta el siglo X d.C.",
        imagenSrc: "/img/coba.webp",
        ubicacion: "/img/ubicoba.png",
        hiro:"/3d/pattern-coba.png"
    },
    "dxibanche-details": {
        titulo: "Dzibanché",
        descripcion: "Dzibanché una antigua ciudad maya en la península de Yucatán, México, prosperó entre los siglos VI y IX d.C. Su nombre, que significa Escritura en Madera en maya, alude a inscripciones jeroglíficas en madera encontradas en el sitio. Los mayas de Dzibanché destacaron en arquitectura, matemáticas y astronomía, y sus estructuras reflejan una profunda comprensión de eventos astronómicos, como el solsticio de invierno. Los visitantes pueden explorar estas antiguas estructuras y monumentos, sumergiéndose en la rica historia y cultura de la civilización maya en este fascinante sitio arqueológico <br><br>  En la zona arqueológica de Dzibanché, además de su destacada arquitectura y su contribución al conocimiento maya, otro aspecto importante es su relación con la observación astronómica. Los mayas de Dzibanché tenían una profunda comprensión de los eventos astronómicos, como el solsticio de invierno, que era de gran importancia en su calendario y cultura. Esta habilidad les permitía realizar calendarios precisos y llevar a cabo ceremonias y rituales en sincronía con los movimientos celestiales, lo que refleja la importancia de la astronomía en su vida cotidiana y espiritualidad",
        imagenSrc: "/img/dxibanché.jpg",
        ubicacion: "/img/ubidxibanche.png",
        hiro:"/3d/pattern-dxibanché.png"
    },
    "dzibilchaltun-details": {
        titulo: "Dzibilchaltún",
        descripcion: "Dzibilchaltún, ubicada en la península de Yucatán, México, es un sitio arqueológico maya de gran relevancia que floreció entre los años 600 y 900 d.C. Su distintiva Pirámide del Adivino es una estructura imponente que destaca en el paisaje y es un testimonio de la habilidad arquitectónica de los mayas. Además de su arquitectura, Dzibilchaltún es conocida por su cenote sagrado, un pozo de agua que desempeñó un papel esencial en la vida de la civilización maya y en sus rituales. El sitio también es notable por su avanzado sistema de calzadas, que conectaban diversas estructuras y grupos arqueológicos en la región, demostrando la organización y planificación de la cultura maya <br><br> La cultura de Dzibilchaltún se manifiesta a través de valiosos artefactos, como cerámica y esculturas, que proporcionan información valiosa sobre la vida cotidiana y las creencias religiosas de los mayas que habitaron esta zona. Las actividades que se llevaban a cabo en este sitio abarcaban desde la agricultura hasta la observación astronómica, evidenciando la versatilidad de la civilización maya. Hoy en día, Dzibilchaltún se ha convertido en un atractivo destino turístico que permite a los visitantes explorar las antiguas ruinas mayas y sumergirse en su historia, cultura y arquitectura en un entorno impresionante y enriquecedor.",
        imagenSrc: "/img/dzibilchaltún.jpg",
        ubicacion: "/img/ubidzibilchaltun.png",
        hiro:"/3d/pattern-dzibilchaltun.png"
    },
    "uxmal-details": {
        titulo: "Uxmal",
        descripcion: "Uxmal, un tesoro de la civilización maya en la península de Yucatán, México, destaca no solo por su imponente arquitectura sino también por su rica cultura. Durante el período clásico tardío, que abarcó los siglos VI al X d.C., Uxmal se convirtió en un epicentro de innovación arquitectónica. Sus estructuras, como la Pirámide del Adivino, el Palacio del Gobernador y la Casa de las Palomas, están adornadas con intrincados relieves y diseños geométricos, mostrando la destreza artística de los mayas. Cada edificio se erige con precisión, alineado cuidadosamente con eventos astronómicos clave, lo que subraya la profunda comprensión de la astronomía por parte de los mayas de Uxmal. <br><br> La cultura de Uxmal fue un faro de conocimiento en ingeniería y arquitectura. Las estructuras mayas aquí eran mucho más que monumentos; eran demostraciones impresionantes de cómo los mayas dominaban la construcción con fines prácticos y ceremoniales. Además de su destreza en la construcción, la civilización maya de Uxmal era conocida por su rica vida cultural, que incluía danzas tradicionales, música y representaciones teatrales. Los visitantes de Uxmal tienen la oportunidad de sumergirse en este legado, explorando la grandeza de la civilización maya mientras se maravillan con la arquitectura excepcional y la rica historia de este sitio en un entorno verdaderamente sorprendente. ",
        imagenSrc: "/img/uxmal.jpg",
        ubicacion: "/img/ubiuxmal.png",
        hiro:"/3d/pattern-uxmal.png"
    },
};

// Función para redirigir a base.html en función del ID y almacenar datos en localStorage
function redireccionar(id) {
    const zona = zonasArqueologicasJSON[id];
    if (zona) {
        localStorage.setItem('titulo', zona.titulo);
        localStorage.setItem('des', zona.descripcion);
        localStorage.setItem('imagenSrc', zona.imagenSrc);
        localStorage.setItem('ubicacion', zona.ubicacion);
        localStorage.setItem('hiro', zona.hiro);
        window.location.href = 'base.html';
    }
}
