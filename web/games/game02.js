var game02 = {
    "multiple_lock": true,
    "title": "Escape Room 2: CONDECERO",
    "description": "El fundador de la empresa Vintageware, Desmond Wester Yutan, ha muerto. La compañia ahora desea el acceso a todos los secretos que oculta la base de datos del difunto Desmond, pero está protegida por un factor de cinco contraseñas que nadie de la empresa conoce. Han recurrido a tus servicios para que penetres en su equipo personal y recuperes dichas claves.",
    "access_codes": ["MIK3LAN63L","HO34TIO5","L30NARD0D","ESM4SDEL0QUEP4R3C3","MYOLD53CR3T"],
    "cards":[
        {
            "id": 0,
            "story": "<p>Desmond Wester Yutan ha muerto, dejando a su compañía Vintageware sin acceso a la base de datos que contiene los archivos confidenciales de la empresa.</p><p>¡Averigua las cinco contraseñas con las que acceder a los secretos de la empresa!</p>",
            "instructions": "<p>Instala la máquina virtual proporcionada y utiliza técnicas de pentesting de forma remota para descubrir las diferentes banderas que te permitirán resolver la escape room. Puedes ir pidiendo pistas hasta desbloquear los 5 candados. (MIK3LAN63L, HO34TIO5, L30NARD0D, ESM4SDEL0QUEP4R3C3, MYOLD53CR3T)</p>",
            "links": [
                {"txt": "Descargar máquina", "href": "https://drive.google.com/open?id=1t9piTFUUzU3thh4CeECoPWeQKX0KQjRg"},
                {"txt": "Instrucciones de instalación", "href": "resources/instrucciones_de_instalacion.pdf"}
            ]
        },
        {
            "id": 1,
            "locker": true
        },
        {
            "id": 2,
            "story": "<p>¡Vamos allá! Mientras llega el informe sobre el Sr. Yutan puedes empezar por lo típico, analizar las vulnerabilidades en los servicios para descubrir alguna vía de acceso a los archivos.</p>",
            "instructions": "<p>Introduce las cinco contraseñas para intentar acceder a la base de datos o pide otra pista.</p>",
            "hint": true
        },
        {
            "id": 3,
            "story": "<p>Para ser el fundador de una corporación tecnológica, la verdad es que no parece que el Sr. Yutan tomase muchas precauciones en su ordenador personal.</p><p>Quizás sería buena idea comprobar el archivo robots.txt</p>",
            "instructions": "<p>Introduce las cinco contraseñas para intentar acceder a la base de datos o pide otra pista.</p>",
            "hint": true
        },
        {
            "id": 4,
            "story": "<p>Quizá haya alguna pista en la aplicación web. No parece que esos módulos sean demasiado seguros.</p>",
            "instructions": "<p>Introduce las cinco contraseñas para intentar acceder a la base de datos o pide otra pista.</p>",
            "hint": true
        },
        {
            "id": 5,
            "story": "<p>¿Dónde podría tener almacenado un password?</p><p>No puede ser TAN obvio...</p>",
            "instructions": "<p>Introduce las cinco contraseñas para intentar acceder a la base de datos o pide otra pista.</p>",
            "hint": true
        },
        {
            "id": 6,
            "story": "<p>¡Por fin ha llegado ese informe!</p><p>Sin hijos ni relaciones conocidas... ni coches de lujo, ni un patrimonio inmobiliario demasiado grande... Al parecer su mayor afición era el coleccionismo de arte abstracto, y estaba obsesionado con la obra de Piet Mondrian.</p>",
            "instructions": "<p>Introduce las cinco contraseñas para intentar acceder a la base de datos o revisa todas las pistas.</p>",
        }

    ] 
};