var baseLayer = new ol.layer.Tile({
      preload: Infinity,
      source: new ol.source.BingMaps({
        key: 'Pl2wXFOEKQ0lIT6FDWrM~7S7lA5j_F2sDUhSdCeQVzw~AvN-ATn5N1EQzxbEEBkYWNUYY1AyXIzXPwXex81xLAN1RyJYJaML4e2gD9QTzsIU',
        imagerySet: 'Aerial'
      })
    });

var format_SealesVerticales_0 = new ol.format.GeoJSON();
var features_SealesVerticales_0 = format_SealesVerticales_0.readFeatures(json_SealesVerticales_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SealesVerticales_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SealesVerticales_0.addFeatures(features_SealesVerticales_0);var lyr_SealesVerticales_0 = new ol.layer.Vector({
                source:jsonSource_SealesVerticales_0, 
                style: style_SealesVerticales_0,
    title: 'SeñalesVerticales<br />\
    <img src="styles/legend/SealesVerticales_0_0.png" /> Amarillo<br />\
    <img src="styles/legend/SealesVerticales_0_1.png" /> Blanco<br />\
    <img src="styles/legend/SealesVerticales_0_2.png" /> Rojo<br />\
    <img src="styles/legend/SealesVerticales_0_3.png" /> Verde<br />\
    <img src="styles/legend/SealesVerticales_0_4.png" /> Azul<br />\
    <img src="styles/legend/SealesVerticales_0_5.png" /> Leds<br />\
    <img src="styles/legend/SealesVerticales_0_6.png" /> Marron<br />'
        });var format_NoCumplen_1 = new ol.format.GeoJSON();
var features_NoCumplen_1 = format_NoCumplen_1.readFeatures(json_NoCumplen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoCumplen_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NoCumplen_1.addFeatures(features_NoCumplen_1);var lyr_NoCumplen_1 = new ol.layer.Vector({
                source:jsonSource_NoCumplen_1, 
                style: style_NoCumplen_1,
                title: '<img src="styles/legend/NoCumplen_1.png" /> NoCumplen'
            });var format_Vas_2 = new ol.format.GeoJSON();
var features_Vas_2 = format_Vas_2.readFeatures(json_Vas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vas_2.addFeatures(features_Vas_2);var lyr_Vas_2 = new ol.layer.Vector({
                source:jsonSource_Vas_2, 
                style: style_Vas_2,
                title: '<img src="styles/legend/Vas_2.png" /> Vías'
            });var format_AbsCompleto_3 = new ol.format.GeoJSON();
var features_AbsCompleto_3 = format_AbsCompleto_3.readFeatures(json_AbsCompleto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbsCompleto_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AbsCompleto_3.addFeatures(features_AbsCompleto_3);var lyr_AbsCompleto_3 = new ol.layer.Vector({
                source:jsonSource_AbsCompleto_3, 
                style: style_AbsCompleto_3,
                title: '<img src="styles/legend/AbsCompleto_3.png" /> AbsCompleto'
            });var format_AbsDevimed_4 = new ol.format.GeoJSON();
var features_AbsDevimed_4 = format_AbsDevimed_4.readFeatures(json_AbsDevimed_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbsDevimed_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AbsDevimed_4.addFeatures(features_AbsDevimed_4);var lyr_AbsDevimed_4 = new ol.layer.Vector({
                source:jsonSource_AbsDevimed_4, 
                style: style_AbsDevimed_4,
                title: '<img src="styles/legend/AbsDevimed_4.png" /> AbsDevimed'
            });

lyr_SealesVerticales_0.setVisible(true);lyr_NoCumplen_1.setVisible(true);lyr_Vas_2.setVisible(true);lyr_AbsCompleto_3.setVisible(true);lyr_AbsDevimed_4.setVisible(true);
var layersList = [baseLayer,lyr_SealesVerticales_0,lyr_NoCumplen_1,lyr_Vas_2,lyr_AbsCompleto_3,lyr_AbsDevimed_4];
lyr_SealesVerticales_0.set('fieldAliases', {'Kilómetro': 'Kilómetro', 'Costado': 'Costado', 'CodSeñal': 'CodSeñal', 'Color': 'Color', 'FechaInspe': 'FechaInspe', 'Imagen': 'Imagen', 'Medición': 'Medición', 'Observ': 'Observ', 'AntiGraf': 'AntiGraf', 'Dir2': 'Dir2', 'X': 'X', 'Y': 'Y', 'Referencia': 'Referencia', 'Cumple': 'Cumple', 'Foto': 'Foto', });
lyr_NoCumplen_1.set('fieldAliases', {'Kilómetro': 'Kilómetro', 'Costado': 'Costado', 'CodSeñal': 'CodSeñal', 'Color': 'Color', 'FechaInspe': 'FechaInspe', 'Imagen': 'Imagen', 'Medición': 'Medición', 'Observ': 'Observ', 'AntiGraf': 'AntiGraf', 'Dir2': 'Dir2', 'X': 'X', 'Y': 'Y', 'Referencia': 'Referencia', 'Cumple': 'Cumple', 'Foto': 'Foto', });
lyr_Vas_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AbsCompleto_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Abscisa': 'Abscisa', });
lyr_AbsDevimed_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SealesVerticales_0.set('fieldImages', {'Kilómetro': 'TextEdit', 'Costado': 'ValueMap', 'CodSeñal': 'TextEdit', 'Color': 'ValueMap', 'FechaInspe': 'DateTime', 'Imagen': 'Hidden', 'Medición': 'TextEdit', 'Observ': 'TextEdit', 'AntiGraf': 'ValueMap', 'Dir2': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Referencia': 'Hidden', 'Cumple': 'Hidden', 'Foto': 'TextEdit', });
lyr_NoCumplen_1.set('fieldImages', {'Kilómetro': 'TextEdit', 'Costado': 'TextEdit', 'CodSeñal': 'TextEdit', 'Color': 'TextEdit', 'FechaInspe': 'TextEdit', 'Imagen': 'Hidden', 'Medición': 'TextEdit', 'Observ': 'TextEdit', 'AntiGraf': 'TextEdit', 'Dir2': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Referencia': 'Hidden', 'Cumple': 'TextEdit', 'Foto': 'TextEdit', });
lyr_Vas_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AbsCompleto_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Abscisa': 'TextEdit', });
lyr_AbsDevimed_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SealesVerticales_0.set('fieldLabels', {'Kilómetro': 'inline label', 'Costado': 'inline label', 'CodSeñal': 'inline label', 'Color': 'inline label', 'FechaInspe': 'inline label', 'Medición': 'inline label', 'Observ': 'inline label', 'AntiGraf': 'inline label', 'Foto': 'no label', });
lyr_NoCumplen_1.set('fieldLabels', {'Kilómetro': 'inline label', 'Costado': 'inline label', 'CodSeñal': 'inline label', 'Color': 'inline label', 'FechaInspe': 'inline label', 'Medición': 'inline label', 'Observ': 'inline label', 'AntiGraf': 'inline label', 'Cumple': 'inline label', 'Foto': 'no label', });
lyr_Vas_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AbsCompleto_3.set('fieldLabels', {'OBJECTID': 'no label', 'Abscisa': 'no label', });
lyr_AbsDevimed_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AbsDevimed_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_AbsDevimed_4.on("postcompose", update);

    var listenerKey = lyr_AbsDevimed_4.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });