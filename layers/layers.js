var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_REGIONSDUBURKINAFASO_2 = new ol.format.GeoJSON();
var features_REGIONSDUBURKINAFASO_2 = format_REGIONSDUBURKINAFASO_2.readFeatures(json_REGIONSDUBURKINAFASO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIONSDUBURKINAFASO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONSDUBURKINAFASO_2.addFeatures(features_REGIONSDUBURKINAFASO_2);
var lyr_REGIONSDUBURKINAFASO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONSDUBURKINAFASO_2, 
                style: style_REGIONSDUBURKINAFASO_2,
                popuplayertitle: "REGIONS DU BURKINA FASO",
                interactive: true,
    title: 'REGIONS DU BURKINA FASO<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_0.png" /> BOUCLE DU MOUHOUN<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_1.png" /> CASCADES<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_2.png" /> CENTRE<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_3.png" /> CENTRE-EST<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_4.png" /> CENTRE-NORD<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_5.png" /> CENTRE-OUEST<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_6.png" /> CENTRE-SUD<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_7.png" /> EST<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_8.png" /> HAUTS-BASSINS<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_9.png" /> NORD<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_10.png" /> PLATEAU-CENTRAL<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_11.png" /> SAHEL<br />\
    <img src="styles/legend/REGIONSDUBURKINAFASO_2_12.png" /> SUD-OUEST<br />'
        });
var format_PRESTATIONSPAYS_3 = new ol.format.GeoJSON();
var features_PRESTATIONSPAYS_3 = format_PRESTATIONSPAYS_3.readFeatures(json_PRESTATIONSPAYS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRESTATIONSPAYS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESTATIONSPAYS_3.addFeatures(features_PRESTATIONSPAYS_3);
var lyr_PRESTATIONSPAYS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRESTATIONSPAYS_3, 
                style: style_PRESTATIONSPAYS_3,
                popuplayertitle: "PRESTATIONS PAYS",
                interactive: true,
    title: 'PRESTATIONS PAYS<br />\
    <img src="styles/legend/PRESTATIONSPAYS_3_0.png" /> Chad<br />\
    <img src="styles/legend/PRESTATIONSPAYS_3_1.png" /> Mali<br />\
    <img src="styles/legend/PRESTATIONSPAYS_3_2.png" /> Niger<br />\
    <img src="styles/legend/PRESTATIONSPAYS_3_3.png" /> Sénégal<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_REGIONSDUBURKINAFASO_2.setVisible(true);lyr_PRESTATIONSPAYS_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSMStandard_1,lyr_REGIONSDUBURKINAFASO_2,lyr_PRESTATIONSPAYS_3];
lyr_REGIONSDUBURKINAFASO_2.set('fieldAliases', {'Nom': 'Nom', 'etude_1': 'etude_1', 'etude_2': 'etude_2', 'etude_3': 'etude_3', 'etude_4': 'etude_4', 'etude_5': 'etude_5', 'etude_6': 'etude_6', 'etude_7': 'etude_7', 'etude_8': 'etude_8', 'etude_9': 'etude_9', 'etude_10': 'etude_10', });
lyr_PRESTATIONSPAYS_3.set('fieldAliases', {'PAYS': 'PAYS', });
lyr_REGIONSDUBURKINAFASO_2.set('fieldImages', {'Nom': 'TextEdit', 'etude_1': 'TextEdit', 'etude_2': 'TextEdit', 'etude_3': 'TextEdit', 'etude_4': 'TextEdit', 'etude_5': 'TextEdit', 'etude_6': 'TextEdit', 'etude_7': 'TextEdit', 'etude_8': 'TextEdit', 'etude_9': 'TextEdit', 'etude_10': 'TextEdit', });
lyr_PRESTATIONSPAYS_3.set('fieldImages', {'PAYS': 'TextEdit', });
lyr_REGIONSDUBURKINAFASO_2.set('fieldLabels', {'Nom': 'inline label - always visible', 'etude_1': 'no label', 'etude_2': 'no label', 'etude_3': 'no label', 'etude_4': 'no label', 'etude_5': 'no label', 'etude_6': 'no label', 'etude_7': 'no label', 'etude_8': 'no label', 'etude_9': 'no label', 'etude_10': 'no label', });
lyr_PRESTATIONSPAYS_3.set('fieldLabels', {'PAYS': 'no label', });
lyr_PRESTATIONSPAYS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});