/*******************************************************************
    VIRTUAL ESCAPE ROOM CORE
    Oneclick 2019
 *******************************************************************/

var selectedGame = getURLParameter("id");
var gameData;
var progress;


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
        case 1:
            gameData = game01;
            break;
        case 2:
            gameData = game02;
            break;
        default:
            gameData = game01;
            break;
    };

    console.log(gameData.cards.length);
    progress = [];

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

    // Creamos la tarjeta de juego

    var cardHtml = "";

    cardHtml += `<section class="game_card" id="game_card_${thisCard.id}">
    <section class="story">${thisCard.story}</section>
    <section class="instructions">${thisCard.instructions}</section>`;
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
            progress[thisCard.id] = true;
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

