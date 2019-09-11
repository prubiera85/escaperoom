var game01 = {
    "title": "Máquina 1: WGIBSON",
    "description": "Atrapa al grupo de hackers que intenta liberar la IA llamada Neuromante. A lo largo de la máquina virtual se podrán localizar diferentes servicios online funcionando en la máquina, donde se han ocultado varias banderas, y en el disco duro de la misma, tras haber obtenido una sesión remota más banderas. Solo mediante el uso de técnicas de pentesting se podrán obtener todas las banderas que hay disponibles en la máquina WGIBSON.",
    "cards":[
        {
            "id": 0,
            "story": "<p>Alguien está intentando liberar Neuromante... </p><p>¡Averigua de dónde procede este ataque y atrapa al culpable antes de que se te adelanten y cobren la recompensa!</p>",
            "instructions": "<p>Instala la máquina virtual proporcionada y utiliza técnicas de pentesting para obtener las diferentes banderas que te permitirán avanzar en la historia y resolver la escape room.</p>",
            "links": [
                {"txt": "Descargar máquina", "href": "resources/machine.zip"},
                {"txt": "Instrucciones de instalación", "href": "resources/instrucciones.pdf"}
            ]
        },
        {
            "id": 1,
            "story": "<p>¿A qué estás esperando?</p><p>Analiza ahora mismo las vulnerabilidades en los servicios para ver de dónde procede este ataque. ¡No podemos permitirnos que Neuromante sea liberada!</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 1 para continuar la historia (ABC)</p>",
            "access_code": "ABC",
            "locked": true
        },
        {
            "id": 2,
            "story": "<p>¿A qué estás esperando?</p><p>Analiza ahora mismo las vulnerabilidades en los servicios para ver de dónde procede este ataque. ¡No podemos permitirnos que Neuromante sea liberada!</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 1 para continuar la historia (ABC)</p>",
            "access_code": "ABC",
            "locked": true
        },
        {
            "id": 3,
            "story": "<p>¿A qué estás esperando?</p><p>Analiza ahora mismo las vulnerabilidades en los servicios para ver de dónde procede este ataque. ¡No podemos permitirnos que Neuromante sea liberada!</p>",
            "instructions": "<p>Introduce la clave obtenida en la bandera 1 para continuar la historia (ABC)</p>",
            "access_code": "ABC",
            "locked": true
        },
        {
            "id": 4,
            "story": "<p>THE END</p>",
            "instructions": "<p>Enhorabuena, has llegado al final de la aventura.</p>"
        }
    ]
}