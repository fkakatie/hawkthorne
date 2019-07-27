var characters = [
    { name: "Jeff",
      health: 66,
      attack: 8,
      color: "5c5ca3",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Britta",
      health: 63,
      attack: 8,
      color: "5ca35c",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Abed",
      health: 67,
      attack: 9,
      color: "a3a35c",
      spriteStatic: "https://raw.githubusercontent.com/hawkthorne/hawkthorne-journey/master/src/images/characters/abed/base.png",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Shirley",
      health: 57,
      attack: 8,
      color: "603960",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Annie",
      health: 67,
      attack: 9,
      color: "a35ca3",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Troy",
      health: 70,
      attack: 7,
      color: "5ca3a3",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Pierce",
      health: 50,
      attack: 7,
      color: "a35c5c",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" },
    { name: "Gilbert",
      health: 54,
      attack: 10,
      color: "a3805c",
      spriteStatic: "path",
      spriteAttack: "path",
      spriteDefend: "path",
      spriteDefeat: "path" }
]
var hasSelectedChar = false;
var selectedChar;
var selectedOpp;

function loadChars(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        var character = arr[i];
        var charBox = $("<div>");
        charBox
            .attr("id", character.name.toLowerCase())
            .addClass("charbox")
            .text(character.name);
        $("#game").append(charBox);
    }
}

function selection() {
    var selected = $(this).attr('id');
    if (hasSelectedChar) {
        selectOpp(selected);
    } else {
        selectChar(selected);
    }
}

function selectChar(selected) {
    selectedChar = selected;
    console.log("SELECT CHAR\n" + selectedChar + " was selected.");
    hasSelectedChar = true;
    // removes selected character from #game
    $("#" + selectedChar).remove();
}

function selectOpp(selected) {
    selectedOpp = selected;
    console.log("SELECT OPP\n" + selectedOpp + " was selected.");
}

$(document).ready(function() {

    console.log( "ready!" );

    loadChars(characters);   
    
    $('#game').on('click', 'div.charbox', selection);

});