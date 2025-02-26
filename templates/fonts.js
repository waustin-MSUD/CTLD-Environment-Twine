/* font type */

var settingFontNames = ["Serif", "Sans-Serif", "Open Dyslexic"];
var settingFontHandler = function () {
    var $html = $("html");

    $html.removeClass("eb-garamond-font rubik-font open-dyslexic-font");

    switch (settings.font) {
        case "Serif":
            $html.addClass("eb-garamond-font");
            break;
        case "Sans-Serif":
            $html.addClass("rubik-font");
            break;
        case "Open Dyslexic":
            $html.addClass("open-dyslexic-font");
            break;
    }
};

Setting.addList("font", {
    label: "Change font style.",
    list: settingFontNames,
    onInit: settingFontHandler,
    onChange: settingFontHandler
});

/* font size */

var settingFontSizeNames = ["Small", "Medium", "Large"];
var settingFontSizeHandler = function () {
    var $html = $("html");

    $html.removeClass("fontsize-medium fontsize-large");

    switch (settings.fontsize) {
        case "Medium":
            $html.addClass("fontsize-medium");
            break;
        case "Large":
            $html.addClass("fontsize-large");
            break;
    }
};

Setting.addList("fontsize", {
    label: "Change font size.",
    list: settingFontSizeNames,
    onInit: settingFontSizeHandler,
    onChange: settingFontSizeHandler
});

/* line height */

var settingLineHeight = ["1.75", "2", "2.25"];
var settingLineHeightHandler = function () {
    var $html = $("html");

    $html.removeClass("lineheight-2 lineheight-2-25");

    switch (settings.lineheight) {
        case "2":
            $html.addClass("lineheight-2");
            break;
        case "2.25":
            $html.addClass("lineheight-2-25");
            break;
    }
};

Setting.addList("lineheight", {
    label: "Change line height.",
    list: settingLineHeight,
    onInit: settingLineHeightHandler,
    onChange: settingLineHeightHandler
});