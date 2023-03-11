function changeColor(lightId, color) {
    var room = $("#" + lightId);
    room.removeClass().addClass('room ' + color);
}

$(document).ready(function () {
    var r1 = $("#room1");
    var c1 = $("#color1");
    var slider1 = $("#brightness-slider1"); 

    var r2 = $("#room2");
    var c2 = $("#color2");
    var slider2 = $("#brightness-slider2");

    var r3 = $("#room3");
    var c3 = $("#color3");
    var slider3 = $("#brightness-slider3");

    var r4 = $("#room4");
    var c4 = $("#color4");
    var slider4 = $("#brightness-slider4");

    function changeBrightness1() {
        if (c1.val() === "black") {
            alert("The Light is Off");
        } else {
            r1.css("filter", "brightness(" + slider1.val() + "%)");
        }
    }

    function changeBrightness2() {
        if (c2.val() === "black") {
            alert("The Light is Off");
        } else {
            r2.css("filter", "brightness(" + slider2.val() + "%)");
        }
    }

    function changeBrightness3() {
        if (c3.val() === "black") {
            alert("The Light is Off");
        } else {
            r3.css("filter", "brightness(" + slider3.val() + "%)");
        }
    }

    function changeBrightness4() {
        if (c4.val() === "black") {
            alert("The Light is Off");
        } else {
            r4.css("filter", "brightness(" + slider4.val() + "%)");
        }
    }

    slider1.on("input", changeBrightness1);
    slider2.on("input", changeBrightness2);
    slider3.on("input", changeBrightness3);
    slider4.on("input", changeBrightness4);
});