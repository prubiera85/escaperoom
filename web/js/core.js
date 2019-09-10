/*******************************************************************
    VIRTUAL ESCAPE ROOM CORE
    Oneclick 2019
 *******************************************************************/

var selectedGame = getURLParameter("game");
var gameData;

(function(){

    // Deeplinking con routie

    routie({
        '': function() {
            //hideAllCards();
        }, 

        'start': function() {
           
        }, 
        
        'home': function() {
   
        },


        'topic/:topic': function(topic) {

        },

        'listening/:topic': function(topic) {

        }
    });

    loadGameData(selectedGame);
    renderGame();
      
 
}());


function loadGameData(selectedGame){
    switch(selectedGame){
        case 1:
            gameData = game01;
        break;
        case 2:
            gameData = game02;
        break;
        default:
            gameData = game01;
        break;
    }
}

function renderGame(){
    
    console.log(gameData.title);
    console.log(gameData.description);

    $(".game_title").html(gameData.title);

    renderCard(0);
    renderCard(1);

}



function renderCard(card_number){

    var thisCard = gameData.cards[card_number];

    // Creamos los botones de enlaces si existen 

    var linksHtml = "";  

    if (thisCard.links){
        thisCard.links.forEach (function(link) {
            linksHtml += `<a href="${link.href}" class="corner_box btn_link">
            <div class="corner_line corner_topleft"></div>
            <div class="corner_line corner_topright"></div>
            <div>${link.txt}</div>
            <div class="corner_line corner_bottomleft"></div>
            <div class="corner_line corner_bottomright"></div>
        </a>`;
        });
    }

    // Creamos el candado si existe

    var accessHtml = "";

    if (thisCard.access_code){
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
        </section>`;
    }

    // Creamos la tarjeta de juego

    var cardHtml = "";

    cardHtml += `<section class="game_card" id="game_card_${thisCard.id}">
    <section class="story">${thisCard.story}</section>
    <section class="instructions">${thisCard.instructions}</section>`;
    cardHtml += `${accessHtml}`;        
    cardHtml += `<section class="navigation_bar">          
        ${linksHtml}
        <a href="#" class="corner_box btn_continue">
            <div class="corner_line corner_topleft"></div>
            <div class="corner_line corner_topright"></div>
            <div>Continuar</div>
            <div class="corner_line corner_bottomleft"></div>
            <div class="corner_line corner_bottomright"></div>
        </a>
    </section>`
    ;

    cardHtml += `</section>`;

    // Añadimos la tarjeta de juego

    $(".game_container").append(cardHtml);
}








/*******************************************************************/
/*      BOTONES                                                    */
/*******************************************************************/

$(document).on("click", ".btn_topic3", function(){
    selectedTopic = 3;
    console.log("click en topic3")
}); 



/*******************************************************************/
/*      FUNCIONES COMUNES                                          */
/*******************************************************************/


function hideAllCards(){
    $(".game_card").hide();
}

function showCard(card_number){
    $("#game_card_" + card_number).show();
}


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

