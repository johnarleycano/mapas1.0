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


// Variables
$id_medicion = (isset($_GET["id_medicion"])) ? $_GET["id_medicion"] : "" ;
$id_tipo_medicion = (isset($_GET["id_tipo_medicion"])) ? $_GET["id_tipo_medicion"] : "" ;
$id_costado = (isset($_GET["id_costado"])) ? $_GET["id_costado"] : "" ;
$id_via = (isset($_GET["id_via"])) ? $_GET["id_via"] : "" ;

# Build SQL SELECT statement and return the geometry as a WKB element
$sql = 
"SELECT
    g.Pk_Id,
    g.Shape,
    g.Fk_Id_Via,
    g.Abscisa_Inicial,
    g.Abscisa_Final,
    AsWKB ( Shape ) AS wkb,
    (
SELECT
    d.Calificacion 
FROM
    mantenimiento.mediciones_detalle AS d
    INNER JOIN configuracion.costados AS c ON d.Fk_Id_Costado = c.Pk_Id
    INNER JOIN configuracion.tipos_costados AS tc ON c.Fk_Id_Tipo_Costado = tc.Pk_Id 
WHERE
    d.Fk_Id_Medicion = {$id_medicion} 
    AND d.Fk_Id_Costado = {$id_costado} 
    AND d.Fk_Id_Tipo_Medicion = {$id_tipo_medicion} 
    AND d.Abscisa = g.Abscisa_Inicial
    ) AS Calificacion 
FROM
    vias_geometrias AS g
    WHERE
g.Fk_Id_Via = {$id_via}";

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
    unset($properties['Shape']);
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