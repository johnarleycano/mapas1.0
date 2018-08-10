var baseLayer = new ol.layer.Tile({
      preload: Infinity,
      source: new ol.source.BingMaps({
        key: 'Pl2wXFOEKQ0lIT6FDWrM~7S7lA5j_F2sDUhSdCeQVzw~AvN-ATn5N1EQzxbEEBkYWNUYY1AyXIzXPwXex81xLAN1RyJYJaML4e2gD9QTzsIU',
        imagerySet: 'Aerial'
      })
    });


var format_Vas_0 = new ol.format.GeoJSON();
var features_Vas_0 = format_Vas_0.readFeatures(json_Vas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vas_0.addFeatures(features_Vas_0);var lyr_Vas_0 = new ol.layer.Vector({
                source:jsonSource_Vas_0, 
                style: style_Vas_0,
                title: '<img src="styles/legend/Vas_0.png" /> Vías'
            });var format_MedicionesHorizontales_1 = new ol.format.GeoJSON();
var features_MedicionesHorizontales_1 = format_MedicionesHorizontales_1.readFeatures(json_MedicionesHorizontales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedicionesHorizontales_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MedicionesHorizontales_1.addFeatures(features_MedicionesHorizontales_1);var lyr_MedicionesHorizontales_1 = new ol.layer.Vector({
                source:jsonSource_MedicionesHorizontales_1, 
                style: style_MedicionesHorizontales_1,
    title: 'MedicionesHorizontales<br />\
    <img src="styles/legend/MedicionesHorizontales_1_0.png" /> Amarillo<br />\
    <img src="styles/legend/MedicionesHorizontales_1_1.png" /> Blanco<br />'
        });var format_AbsCompleto_2 = new ol.format.GeoJSON();
var features_AbsCompleto_2 = format_AbsCompleto_2.readFeatures(json_AbsCompleto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbsCompleto_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AbsCompleto_2.addFeatures(features_AbsCompleto_2);var lyr_AbsCompleto_2 = new ol.layer.Vector({
                source:jsonSource_AbsCompleto_2, 
                style: style_AbsCompleto_2,
                title: '<img src="styles/legend/AbsCompleto_2.png" /> AbsCompleto'
            });var format_AbsDevimed_3 = new ol.format.GeoJSON();
var features_AbsDevimed_3 = format_AbsDevimed_3.readFeatures(json_AbsDevimed_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbsDevimed_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AbsDevimed_3.addFeatures(features_AbsDevimed_3);var lyr_AbsDevimed_3 = new ol.layer.Vector({
                source:jsonSource_AbsDevimed_3, 
                style: style_AbsDevimed_3,
                title: '<img src="styles/legend/AbsDevimed_3.png" /> AbsDevimed'
            });

lyr_Vas_0.setVisible(true);lyr_MedicionesHorizontales_1.setVisible(true);lyr_AbsCompleto_2.setVisible(true);lyr_AbsDevimed_3.setVisible(true);
var layersList = [baseLayer,lyr_Vas_0,lyr_MedicionesHorizontales_1,lyr_AbsCompleto_2,lyr_AbsDevimed_3];
lyr_Vas_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MedicionesHorizontales_1.set('fieldAliases', {'Kilómetro': 'Kilómetro', 'Calzada': 'Calzada', 'Costado': 'Costado', 'Color': 'Color', 'FechaInspe': 'FechaInspe', 'Medición': 'Medición', 'Observaci�': 'Observaci�', 'Referencia': 'Referencia', 'Cumple': 'Cumple', });
lyr_AbsCompleto_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Abscisa': 'Abscisa', });
lyr_AbsDevimed_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Vas_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_MedicionesHorizontales_1.set('fieldImages', {'Kilómetro': 'TextEdit', 'Calzada': 'ValueMap', 'Costado': 'ValueMap', 'Color': 'ValueMap', 'FechaInspe': 'DateTime', 'Medición': 'TextEdit', 'Observaci�': 'TextEdit', 'Referencia': 'Hidden', 'Cumple': 'Hidden', });
lyr_AbsCompleto_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Abscisa': 'TextEdit', });
lyr_AbsDevimed_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Vas_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MedicionesHorizontales_1.set('fieldLabels', {'Kilómetro': 'inline label', 'Calzada': 'inline label', 'Costado': 'inline label', 'Color': 'inline label', 'FechaInspe': 'inline label', 'Medición': 'inline label', 'Observaci�': 'inline label', });
lyr_AbsCompleto_2.set('fieldLabels', {'OBJECTID': 'no label', 'Abscisa': 'no label', });
lyr_AbsDevimed_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AbsDevimed_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_AbsDevimed_3.on("postcompose", update);

    var listenerKey = lyr_AbsDevimed_3.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });