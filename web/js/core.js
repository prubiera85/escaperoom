/*******************************************************************
    VIRTUAL ESCAPE ROOM CORE
    Oneclick 2019
 *******************************************************************/

var selectedGame = getURLParameter("id");
var gameData;
var progress;
var solved;




(function () {

    loadGameData(selectedGame);
    renderGame();

    // Controla el scroll para mostrar el botón de volver arriba
    window.onscroll = function () { scrollManager() };

}());





function renderLine() {
    $(".game_container").append("<hr class='trans--grow horizontal_line'></div>");
    setTimeout(function () {
        $('.trans--grow').addClass('grow');
    }, 175);
}


function scrollManager() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#btn_scroll_top").show();
    } else {
        $("#btn_scroll_top").hide();
    }
}

function scrollToTop() {
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 500);
}




function loadGameData(selectedGame) {
    switch (selectedGame) {
        case "1":
            gameData = game01;
            break;
        case "2":
            gameData = game02;
            break;
        default:
            gameData = game01;
            break;
    };

    console.log(gameData.cards.length);

    progress = [];
    solved = 0;
}

function renderGame() {

    console.log(gameData.title);
    console.log(gameData.description);

    $(".game_title").html(gameData.title);

    renderCard(0);
}



function renderCard(card_number) {

    var thisCard = gameData.cards[card_number];

    // Creamos los botones de enlaces si existen 

    var linksHtml = "";

    if (thisCard.links) {

        linksHtml += `<section class="link_bar">`;

        thisCard.links.forEach(function (link) {
            linksHtml += `<a href="${link.href}" class="corner_box btn_link">
            <div class="corner_line corner_topleft"></div>
            <div class="corner_line corner_topright"></div>
            <div>${link.txt}</div>
            <div class="corner_line corner_bottomleft"></div>
            <div class="corner_line corner_bottomright"></div>
        </a>`;
        });

        linksHtml += `<a class="corner_box btn_continue">
            <div class="corner_line corner_topleft"></div>
            <div class="corner_line corner_topright"></div>
            <div>Continuar</div>
            <div class="corner_line corner_bottomleft"></div>
            <div class="corner_line corner_bottomright"></div>
        </a>`;

        linksHtml += `</section>`;
    }


    if (thisCard.hint || thisCard.locker) {

        linksHtml += `<section class="link_bar">
        <a class="corner_box btn_continue">
            <div class="corner_line corner_topleft"></div>
            <div class="corner_line corner_topright"></div>
            <div>Obtener pista</div>
            <div class="corner_line corner_bottomleft"></div>
            <div class="corner_line corner_bottomright"></div>
        </a>
        </section>`;
    }


    // Creamos el candado si existe

    var accessHtml = "";

    if (thisCard.access_code) {
        accessHtml += `<section class="code_prompt">
            <p class="warning">WARNING</p>
            <p class="text">Introduce el código de acceso para continuar</p>
            <input class="access_code_input" type="text" name="access_code">
            <div class="corner_box btn_validate">
                <div class="corner_line corner_topleft"></div>
                <div class="corner_line corner_topright"></div>
                <div>Validar código</div>
                <div class="corner_line corner_bottomleft"></div>
                <div class="corner_line corner_bottomright"></div>
            </div>
            <p class="feedback"></p>
        </section>`;
    }

    // Creamos un candado múltiple si la escape room es de ese tipo

    //if (gameData.multiple_lock) {
    if (thisCard.locker) {
        accessHtml += `
        
        <section class="code_prompt">

            <p class="warning">ACCESO RESTRINGIDO</p>
            <p class="text">Introduce los 5 códigos para desbloquear la base de datos</p>

            <section class="multiple_lock">

            <div class="lock">
                <input id="code1" class="access_code_input" type="text" name="access_code_1">
                <div id="btn1" class="corner_box btn_validate">
                    <div class="corner_line corner_topleft"></div>
                    <div class="corner_line corner_topright"></div>
                    <div class="lock_feedback">Validar código 1</div>
                    <div class="corner_line corner_bottomleft"></div>
                    <div class="corner_line corner_bottomright"></div>
                </div>
            </div>

            <div class="lock">
                <input id="code2" class="access_code_input" type="text" name="access_code_2">
                <div id="btn2" class="corner_box btn_validate">
                    <div class="corner_line corner_topleft"></div>
                    <div class="corner_line corner_topright"></div>
                    <div class="lock_feedback">Validar código 2</div>
                    <div class="corner_line corner_bottomleft"></div>
                    <div class="corner_line corner_bottomright"></div>
                </div>
            </div>

            <div class="lock">
                <input id="code3" class="access_code_input" type="text" name="access_code_3">
                <div id="btn3" class="corner_box btn_validate">
                    <div class="corner_line corner_topleft"></div>
                    <div class="corner_line corner_topright"></div>
                    <div class="lock_feedback">Validar código 3</div>
                    <div class="corner_line corner_bottomleft"></div>
                    <div class="corner_line corner_bottomright"></div>
                </div>
            </div>

            <div class="lock">
                <input id="code4" class="access_code_input" type="text" name="access_code_4">
                <div id="btn4" class="corner_box btn_validate">
                    <div class="corner_line corner_topleft"></div>
                    <div class="corner_line corner_topright"></div>
                    <div class="lock_feedback">Validar código 4</div>
                    <div class="corner_line corner_bottomleft"></div>
                    <div class="corner_line corner_bottomright"></div>
                </div>
            </div>

            <div class="lock">
                <input id="code5" class="access_code_input" type="text" name="access_code_5">
                <div id="btn5" class="corner_box btn_validate">
                    <div class="corner_line corner_topleft"></div>
                    <div class="corner_line corner_topright"></div>
                    <div class="lock_feedback">Validar código 5</div>
                    <div class="corner_line corner_bottomleft"></div>
                    <div class="corner_line corner_bottomright"></div>
                </div>
            </div>

            </section>
            <p class="feedback"></p>

        </section>`;

    }


    // Creamos la tarjeta de juego

    var cardHtml = "";

    cardHtml += `<section class="game_card" id="game_card_${thisCard.id}">`;

    if (!thisCard.locker){
        cardHtml += `<section class="story">${thisCard.story}</section>
        <section class="instructions">${thisCard.instructions}</section>`;
    }
    cardHtml += `${accessHtml}`;
    cardHtml += `${linksHtml}`;
    cardHtml += `</section>`;



    // Añadimos la tarjeta de juego
    $(".game_container").append(cardHtml);

    // Controles de los botones

    var thisCardHandler = "#game_card_" + thisCard.id;

    $(document).on("click", "#game_card_" + thisCard.id + " .btn_continue", function () {
        console.log(thisCardHandler);
        console.log(progress);
        var nextCard = thisCard.id + 1;
        if (!thisCard.locked) {
            if (!thisCard.hint || !thisCard.locker){
                //progress[thisCard.id] = true;
            }
            renderLine();
            renderCard(nextCard);
            $("#game_card_" + nextCard).addClass("animated fadeIn");
            $('html, body').animate({
                scrollTop: $("#game_card_" + nextCard).offset().top
            }, 1500);

            $(this).addClass("animated fadeOut faster");
            setTimeout(function () { $("#game_card_" + thisCard.id + " .btn_continue").remove(); }, 380);

        } else {
            unlockCard(thisCard);
        }

    });

    $(document).on("click", "#game_card_" + thisCard.id + " .btn_validate", function () {
        if (thisCard.locked) {
            unlockCard(thisCard);
        }
        if (gameData.multiple_lock){
            var thisLockId = this.id.replace("btn","");
            unlockMultipleCard(thisLockId);
        }
    });


}




function unlockCard(thisCard) {

    var feedbackGranted = "Acceso concedido";
    var feedbackDenied = "Acceso denegado, prueba otra vez";
    var attempt = $("#game_card_" + thisCard.id + " .access_code_input").val().toUpperCase();
    var nextCard = thisCard.id + 1;
    $("#game_card_" + thisCard.id + " .feedback").removeClass("animated faster flash");


    if (thisCard.access_code == attempt) {
        // comprobar si hemos completado las cartas anteriores
        $("#game_card_" + thisCard.id + " .btn_validate").remove();
        $("#game_card_" + thisCard.id + " .access_code_input").prop("disabled", true).css({ "color": "#00ff00", "text-shadow": "0px 0px 20px #00ff00" });
        $("#game_card_" + thisCard.id + " .feedback").text(feedbackGranted).css({ "color": "#00ff00", "text-shadow": "0px 0px 20px #00ff00" });

        renderLine();
        renderCard(nextCard);

        $("#game_card_" + nextCard).addClass("animated fadeIn");
        $('html, body').animate({
            scrollTop: $("#game_card_" + nextCard).offset().top
        }, 1500);


    } else {
        $("#game_card_" + thisCard.id + " .access_code_input").val("");
        $("#game_card_" + thisCard.id + " .feedback").text(feedbackDenied).css({ "color": "#FF291A", "text-shadow": "0px 0px 20px #FF2C2C" });
        setTimeout(function () {
            $("#game_card_" + thisCard.id + " .feedback").addClass("animated faster flash");
        }, 175);
    }
}





function unlockMultipleCard(thisLockId) {

    console.log(thisLockId);

    var feedbackGrantedFinal = "<p>Acceso concedido</p><p>¡Felicidades, has descubierto las cinco contraseñas! ¡El futuro de Vintageware está asegurado!</p>";
    var feedbackGrantedFinal = "Acceso a la BBDD concedido";
    var feedbackGranted = "Desbloqueado código " + thisLockId;
    var feedbackDenied = "Acceso denegado, prueba otra vez";
    var attempt = $("#code" + thisLockId).val().toUpperCase();
    var nextCard = thisLockId + 1;
    $(".feedback").removeClass("animated faster flash");
    var thisCode = thisLockId - 1;
    
    if (gameData.access_codes[thisCode] == attempt) {
        // comprobar si hemos completado las cartas anteriores
        $("#code" + thisLockId).prop("disabled", true).css({ "color": "#00ff00", "text-shadow": "0px 0px 20px #00ff00" });
        $("#btn" + thisLockId).find(".lock_feedback").text(feedbackGranted).css({ "color": "#00ff00", "text-shadow": "0px 0px 20px #00ff00" });
        progress[thisCode] = true;


    } else {
        $("#code" + thisLockId).val("");
        $(".feedback").text(feedbackDenied).css({ "color": "#FF291A", "text-shadow": "0px 0px 20px #FF2C2C" });
        setTimeout(function () {
            $(".feedback").addClass("animated faster flash");
        }, 175);
    }

    // Comprobamos si se han desbloqueado todas las cerraduras
   
    solved=0;

    for (i=0; i<gameData.access_codes.length; i++){
        if (progress[i] == true){
            solved ++;
        }
    }

    if (solved==gameData.access_codes.length){
        console.log("JUEGO TERMINADO");
        $(".feedback").html(feedbackGrantedFinal).css({ "color": "#00ff00", "text-shadow": "0px 0px 20px #00ff00" });
        $( "#game_card_1" ).next().remove();
        $( "#game_card_2" ).next().remove();
        $( "#game_card_2" ).remove();
        $( "#game_card_3" ).next().remove();
        $( "#game_card_3" ).remove();
        $( "#game_card_4" ).next().remove();
        $( "#game_card_4" ).remove();
        $( "#game_card_5" ).next().remove();
        $( "#game_card_5" ).remove();
        $( "#game_card_6" ).next().remove();
        $( "#game_card_6" ).remove();
        $(".feedback").after('<section class="story"><p>¡Felicidades, has descubierto las cinco contraseñas! ¡El futuro de Vintageware está asegurado!</p></section><section class="instructions">Enhorabuena, has llegado al final de la aventura.</section>');
    }

}




/*******************************************************************/
/*      BOTONES                                                    */
/*******************************************************************/

$(document).on("click", ".btn_topic3", function () {
    selectedTopic = 3;
    console.log("click en topic3")
});



/*******************************************************************/
/*      FUNCIONES COMUNES                                          */
/*******************************************************************/

/**
 * Retorna el valor de una variable GET especificada
 * @function
 * @param {string} name - Nombre de la variable get
 * @return {string} si existe la variable
 * @return {null} si no existe la variable
 */
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}


/**
 * Carga dinámica de fichero javascript
 * @function
 * @param {string} src - Ruta relativa/absoluta al fichero .js
 */
function loadJS(src) {
    var jsLink = $("<script type='text/javascript' src='" + src + "' />");
    $("head").append(jsLink);
}

