var size = 0;
var placement = 'point';
function categories_PRESTATIONSPAYS_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Chad':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(226,22,172,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(216,36,4,0.08627450980392157)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mali':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,16,240,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(136,239,198,0.19607843137254902)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Niger':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(242,105,14,0.23921568627450981)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sénégal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(208,33,208,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(114,70,156,0.2823529411764706)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PRESTATIONSPAYS_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("PAYS");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PRESTATIONSPAYS_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
