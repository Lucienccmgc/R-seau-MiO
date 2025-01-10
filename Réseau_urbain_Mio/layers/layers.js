var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GooglecnSatellite_1 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_PlanIGNv2_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN v2',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNv2_2, 0]);

        var lyr_Positron_3 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Ligne_4_du_lu_au_ven_priode_sco_4 = new ol.format.GeoJSON();
var features_Ligne_4_du_lu_au_ven_priode_sco_4 = format_Ligne_4_du_lu_au_ven_priode_sco_4.readFeatures(json_Ligne_4_du_lu_au_ven_priode_sco_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne_4_du_lu_au_ven_priode_sco_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne_4_du_lu_au_ven_priode_sco_4.addFeatures(features_Ligne_4_du_lu_au_ven_priode_sco_4);
var lyr_Ligne_4_du_lu_au_ven_priode_sco_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne_4_du_lu_au_ven_priode_sco_4, 
                style: style_Ligne_4_du_lu_au_ven_priode_sco_4,
                popuplayertitle: 'Ligne_4_du_lu_au_ven_période_sco',
                interactive: false,
                title: '<img src="styles/legend/Ligne_4_du_lu_au_ven_priode_sco_4.png" /> Ligne_4_du_lu_au_ven_période_sco'
            });
var format_Ligne4_5 = new ol.format.GeoJSON();
var features_Ligne4_5 = format_Ligne4_5.readFeatures(json_Ligne4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne4_5.addFeatures(features_Ligne4_5);
var lyr_Ligne4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne4_5, 
                style: style_Ligne4_5,
                popuplayertitle: 'Ligne 4 ',
                interactive: false,
                title: '<img src="styles/legend/Ligne4_5.png" /> Ligne 4 '
            });
var format_Ligne_3_du_lu_au_ven_priode_sco_6 = new ol.format.GeoJSON();
var features_Ligne_3_du_lu_au_ven_priode_sco_6 = format_Ligne_3_du_lu_au_ven_priode_sco_6.readFeatures(json_Ligne_3_du_lu_au_ven_priode_sco_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne_3_du_lu_au_ven_priode_sco_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne_3_du_lu_au_ven_priode_sco_6.addFeatures(features_Ligne_3_du_lu_au_ven_priode_sco_6);
var lyr_Ligne_3_du_lu_au_ven_priode_sco_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne_3_du_lu_au_ven_priode_sco_6, 
                style: style_Ligne_3_du_lu_au_ven_priode_sco_6,
                popuplayertitle: 'Ligne_3_du_lu_au_ven_période_sco',
                interactive: false,
                title: '<img src="styles/legend/Ligne_3_du_lu_au_ven_priode_sco_6.png" /> Ligne_3_du_lu_au_ven_période_sco'
            });
var format_Ligne3_7 = new ol.format.GeoJSON();
var features_Ligne3_7 = format_Ligne3_7.readFeatures(json_Ligne3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne3_7.addFeatures(features_Ligne3_7);
var lyr_Ligne3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne3_7, 
                style: style_Ligne3_7,
                popuplayertitle: 'Ligne 3',
                interactive: false,
                title: '<img src="styles/legend/Ligne3_7.png" /> Ligne 3'
            });
var format_Ligne2_8 = new ol.format.GeoJSON();
var features_Ligne2_8 = format_Ligne2_8.readFeatures(json_Ligne2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne2_8.addFeatures(features_Ligne2_8);
var lyr_Ligne2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne2_8, 
                style: style_Ligne2_8,
                popuplayertitle: 'Ligne 2 ',
                interactive: false,
                title: '<img src="styles/legend/Ligne2_8.png" /> Ligne 2 '
            });
var format_Ligne_1_du_lu_au_ven_priode_sco_9 = new ol.format.GeoJSON();
var features_Ligne_1_du_lu_au_ven_priode_sco_9 = format_Ligne_1_du_lu_au_ven_priode_sco_9.readFeatures(json_Ligne_1_du_lu_au_ven_priode_sco_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne_1_du_lu_au_ven_priode_sco_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne_1_du_lu_au_ven_priode_sco_9.addFeatures(features_Ligne_1_du_lu_au_ven_priode_sco_9);
var lyr_Ligne_1_du_lu_au_ven_priode_sco_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne_1_du_lu_au_ven_priode_sco_9, 
                style: style_Ligne_1_du_lu_au_ven_priode_sco_9,
                popuplayertitle: 'Ligne_1_du_lu_au_ven_période_sco',
                interactive: false,
                title: '<img src="styles/legend/Ligne_1_du_lu_au_ven_priode_sco_9.png" /> Ligne_1_du_lu_au_ven_période_sco'
            });
var format_Ligne1_10 = new ol.format.GeoJSON();
var features_Ligne1_10 = format_Ligne1_10.readFeatures(json_Ligne1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ligne1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne1_10.addFeatures(features_Ligne1_10);
var lyr_Ligne1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligne1_10, 
                style: style_Ligne1_10,
                popuplayertitle: 'Ligne 1',
                interactive: false,
                title: '<img src="styles/legend/Ligne1_10.png" /> Ligne 1'
            });
var format_ArrtsdurseauMiO_11 = new ol.format.GeoJSON();
var features_ArrtsdurseauMiO_11 = format_ArrtsdurseauMiO_11.readFeatures(json_ArrtsdurseauMiO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArrtsdurseauMiO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArrtsdurseauMiO_11.addFeatures(features_ArrtsdurseauMiO_11);
cluster_ArrtsdurseauMiO_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ArrtsdurseauMiO_11
});
var lyr_ArrtsdurseauMiO_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ArrtsdurseauMiO_11, 
                style: style_ArrtsdurseauMiO_11,
                popuplayertitle: 'Arrêts du réseau MiO',
                interactive: true,
                title: '<img src="styles/legend/ArrtsdurseauMiO_11.png" /> Arrêts du réseau MiO'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GooglecnSatellite_1.setVisible(true);lyr_PlanIGNv2_2.setVisible(true);lyr_Positron_3.setVisible(true);lyr_Ligne_4_du_lu_au_ven_priode_sco_4.setVisible(true);lyr_Ligne4_5.setVisible(true);lyr_Ligne_3_du_lu_au_ven_priode_sco_6.setVisible(true);lyr_Ligne3_7.setVisible(true);lyr_Ligne2_8.setVisible(true);lyr_Ligne_1_du_lu_au_ven_priode_sco_9.setVisible(true);lyr_Ligne1_10.setVisible(true);lyr_ArrtsdurseauMiO_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GooglecnSatellite_1,lyr_PlanIGNv2_2,lyr_Positron_3,lyr_Ligne_4_du_lu_au_ven_priode_sco_4,lyr_Ligne4_5,lyr_Ligne_3_du_lu_au_ven_priode_sco_6,lyr_Ligne3_7,lyr_Ligne2_8,lyr_Ligne_1_du_lu_au_ven_priode_sco_9,lyr_Ligne1_10,lyr_ArrtsdurseauMiO_11];
lyr_Ligne_4_du_lu_au_ven_priode_sco_4.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ligne4_5.set('fieldAliases', {'id': 'id', });
lyr_Ligne_3_du_lu_au_ven_priode_sco_6.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ligne3_7.set('fieldAliases', {'id': 'id', });
lyr_Ligne2_8.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ligne_1_du_lu_au_ven_priode_sco_9.set('fieldAliases', {'id': 'id', });
lyr_Ligne1_10.set('fieldAliases', {'id': 'id', });
lyr_ArrtsdurseauMiO_11.set('fieldAliases', {'fid': 'fid', 'stop_id': 'stop_id', 'stop_code': 'stop_code', 'stop_name': 'stop_name', 'stop_desc': 'stop_desc', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'stop_url': 'stop_url', 'location_type': 'location_type', 'parent_station': 'parent_station', 'wheelchair_boarding': 'wheelchair_boarding', 'platform_code': 'platform_code', });
lyr_Ligne_4_du_lu_au_ven_priode_sco_4.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ligne4_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Ligne_3_du_lu_au_ven_priode_sco_6.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ligne3_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Ligne2_8.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ligne_1_du_lu_au_ven_priode_sco_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Ligne1_10.set('fieldImages', {'id': 'TextEdit', });
lyr_ArrtsdurseauMiO_11.set('fieldImages', {'fid': 'TextEdit', 'stop_id': 'Range', 'stop_code': 'TextEdit', 'stop_name': 'TextEdit', 'stop_desc': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'stop_url': 'TextEdit', 'location_type': 'TextEdit', 'parent_station': 'TextEdit', 'wheelchair_boarding': 'CheckBox', 'platform_code': 'TextEdit', });
lyr_Ligne_4_du_lu_au_ven_priode_sco_4.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ligne4_5.set('fieldLabels', {'id': 'no label', });
lyr_Ligne_3_du_lu_au_ven_priode_sco_6.set('fieldLabels', {'id': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'no label', });
lyr_Ligne3_7.set('fieldLabels', {'id': 'no label', });
lyr_Ligne2_8.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ligne_1_du_lu_au_ven_priode_sco_9.set('fieldLabels', {'id': 'no label', });
lyr_Ligne1_10.set('fieldLabels', {'id': 'no label', });
lyr_ArrtsdurseauMiO_11.set('fieldLabels', {'fid': 'hidden field', 'stop_id': 'hidden field', 'stop_code': 'inline label - always visible', 'stop_name': 'inline label - always visible', 'stop_desc': 'hidden field', 'stop_lat': 'inline label - always visible', 'stop_lon': 'inline label - always visible', 'stop_url': 'hidden field', 'location_type': 'hidden field', 'parent_station': 'hidden field', 'wheelchair_boarding': 'hidden field', 'platform_code': 'hidden field', });
lyr_ArrtsdurseauMiO_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});