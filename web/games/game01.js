var game01 = {
    "title": "Escape Room 1: WGIBSON",
    "description": "Atrapa al grupo de hackers que intenta liberar la IA llamada Neuromante. A lo largo de la máquina virtual se podrán localizar diferentes servicios online funcionando en la máquina, donde se han ocultado varias banderas, y en el disco duro de la misma, tras haber obtenido una sesión remota más banderas. Solo mediante el uso de técnicas de pentesting se podrán obtener todas las banderas que hay disponibles en la máquina WGIBSON.",
    "cards":[
        {
            "id": 0,
            "story": "<p>Tu misión es impedir que la organización de hackers conocidos como Freesiders libere a Neuromante, la Inteligencia Artificial que podría provocar el colapso de la sociedad actual y de paso, cobrar una sustanciosa recompensa de 4,200,000€.</p><p>¡Averigua de dónde procede el ataque y atrapa al culpable antes de que se te adelanten!</p>",
            "instructions": "<p>Instala la máquina virtual proporcionada y utiliza técnicas de pentesting para obtener las diferentes banderas que te permitirán avanzar en la historia y resolver la escape room.</p>",
            "links": [
                {"txt": "Descargar máquina", "href": "resources/WGIBSON.zip"},
                {"txt": "Instrucciones de instalación", "href": "resources/instrucciones_de_instalacion.pdf"}
            ]
        },
        {
            "id": 1,
            "story": "<p>Alguien está intentando liberar Neuromante... </p><p>¿A qué estás esperando?</p><p>Analiza ahora mismo las vulnerabilidades en los servicios para ver de dónde procede este ataque. ¡No podemos permitirnos que sea liberada!</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 1 para continuar la historia (DHI3OTU2)</p>",
            "access_code": "DHI3OTU2",
            "locked": true
        },
        {
            "id": 2,
            "story": "<p>Has descubierto que los sensores del servicio han detectado al usuario Armitage en el servicio FTP, pero tu instinto te dice que busques en más servicios de esa máquina.</p><p>Los Freesiders son un grupo de hackers antisistema que utilizan la piratería como una manera de cuestionar la autoridad y toman sus identidades virtuales de personajes conocidos del movimiento cyberpunk. El nombre tiene todo el sentido...</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 2 para continuar la historia (ZVM9GJT5)</p>",
            "access_code": "ZVM9GJT5",
            "locked": true
        },
        {
            "id": 3,
            "story": "<p>Los robots de mantenimiento de la corporación Ashura señalan la ruta /hosaka.php.</p><p>Quizá haya alguna pista en esa ruta de la aplicación web.</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 3 para continuar la historia (LEO5NET9)</p>",
            "access_code": "LEO5NET9",
            "locked": true
        },
        {
            "id": 4,
            "story": "<p>Neodixie, fundador de la organización, está supuestamente retirado de la actividad delictiva desde hace años. En paradero desconocido, nunca se le ha visto el rostro, pero se dice que ese tal Armitage es su lugarteniente.</p><p>Todas las pistas apuntan a que la contraseña del intruso es una de las palabras que se presentan en la aplicación web.</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 4 para continuar la historia (ASI0MOV3)</p>",
            "access_code": "ASI0MOV3",
            "locked": true
        },
        {
            "id": 5,
            "story": "<p>El intruso ha intentado borrar las huellas de su próximo paso, pero estás seguro de que hay algún método para descubrirlo...</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 5 para continuar la historia (RUN1MOB4)</p>",
            "access_code": "RUN1MOB4",
            "locked": true
        },
        {
            "id": 6,
            "story": "<p>El atacante se ha ocultado en un lugar que él cree seguro, pero sabes que está acorralado. Casi puedes sentir su shell en la punta de tus dedos...</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 6 para continuar la historia (THE6END0)</p>",
            "access_code": "THE6END0",
            "locked": true
        },
        {
            "id": 4,
            "story": "<p>¡Felicidades! ¡Le has atrapado! Ahora solo queda disfrutar de la recompensa por un trabajo bien hecho...</p>",
            "instructions": "<p>Enhorabuena, has llegado al final de la aventura.</p>"
        }
    ]
};