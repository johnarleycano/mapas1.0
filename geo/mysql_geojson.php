<?php
/**
 * Title:   MySQL to GeoJSON (Requires https://github.com/phayes/geoPHP)
 * Notes:   Query a MySQL table or view and return the results in GeoJSON format, suitable for use in OpenLayers, Leaflet, etc.
 * Author:  Bryan R. McBride, GISP
 * Contact: bryanmcbride.com
 * GitHub:  https://github.com/bmcbride/PHP-Database-GeoJSON
 */

# Include required geoPHP library and define wkb_to_json function
include_once('geoPHP/geoPHP.inc');
function wkb_to_json($wkb) {
    $geom = geoPHP::load($wkb,'wkb');
    return $geom->out('json');
}

# Connect to MySQL database
$conn = new PDO('mysql:host=192.168.0.12;dbname=configuracion','publicador','d3v1m3d');

# Build SQL SELECT statement and return the geometry as a WKB element
$sql = 
"SELECT
    g.Pk_Id,
    g.SHAPE,
    g.Fk_Id_Via,
    g.de,
    g.hasta,
    AsWKB ( SHAPE ) AS wkb,
    (
SELECT
    d.Calificacion 
FROM
    mantenimiento.mediciones_detalle AS d
    INNER JOIN configuracion.costados AS c ON d.Fk_Id_Costado = c.Pk_Id
    INNER JOIN configuracion.tipos_costados AS tc ON c.Fk_Id_Tipo_Costado = tc.Pk_Id 
WHERE
    d.Fk_Id_Medicion = 475 
    AND d.Fk_Id_Costado = 31 
    AND d.Fk_Id_Tipo_Medicion = 1 
    AND d.Abscisa = g.de 
    ) AS Calificacion 
FROM
    vias_geometrias AS g";

# Try query or error
$rs = $conn->query($sql);
if (!$rs) {
    echo 'An SQL error occured.\n';
    exit;
}

# Build GeoJSON feature collection array
$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);

# Loop through rows to build feature arrays
while ($row = $rs->fetch(PDO::FETCH_ASSOC)) {
    $properties = $row;
    # Remove wkb and geometry fields from properties
    unset($properties['wkb']);
    unset($properties['SHAPE']);
    $feature = array(
         'type' => 'Feature',
         'geometry' => json_decode(wkb_to_json($row['wkb'])),
         'properties' => $properties
    );
    # Add feature arrays to feature collection array
    array_push($geojson['features'], $feature);
}

header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
$conn = NULL;
?>