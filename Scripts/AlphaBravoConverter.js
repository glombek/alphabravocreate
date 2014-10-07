var lookup = {
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliet",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-Ray",
    "Y": "Yankee",
    "Z": "Zulu"//,
    //" ": "[Space]"
}

function Convert() {
    var tb = $("#Textbox");
    var string = tb.text();

    window.location.hash = encodeURIComponent(string);

    var lettersDiv = $("#LettersDiv");
    lettersDiv.html("");

    for (iChar in string) {
        var char = string[iChar].toUpperCase();

        var el = $(document.createElement("div"));
        el.addClass("letter");

        var lu = lookup[char];
        if (!lu) lu = char;
        el.text(lu);

        el.appendTo(lettersDiv);
    }

    $(".letter").click(function () {
        $(this).toggleClass("fade");
    });
}

$(function () {
    var value;

    if (window.location.hash && window.location.hash != "#") {
        value = decodeURIComponent(window.location.hash.replace(/^.*#/, ''));
    }
    else {
        value = window.clipboardData;
        if (value) {
            value = value.getData('Text');
        }
        if (!value || value == "") {
            value = "ABC";
        }
    }
    $("#Textbox").text(value);
    Convert();

    $("#Textbox").on("keypress", function (e) {
        if (e.which == 13) {
            Convert();
            e.preventDefault();
        }
    });
});