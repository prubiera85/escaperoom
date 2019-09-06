/*******************************************************************
    VIRTUAL ESCAPE ROOM CORE
    Oneclick 2019
 *******************************************************************/

// var scope_path = "sources/";    // ruta de libro por defecto
var manifiesto = "/imsmanifest.xml";
var selectedGame ;

(function(){
    


    // Deeplinking con routie

    routie({
        '': function() {
            hideAllModules();
        }, 

        'start': function() {
            hideAllModules();
            initScreen("start");
        }, 
        
        'home': function() {
            hideAllModules();
            initScreen("home");
        },


        'topic/:topic': function(topic) {
            hideAllModules();
            initScreen("topic",topic);
        },

        'listening/:topic': function(topic) {
            hideAllModules();
            initScreen("listening",topic);
        }

        
    });


      
 


}());





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


function hideAllModules(){
    $(".module").hide();
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

