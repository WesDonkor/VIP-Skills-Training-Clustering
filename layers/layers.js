ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-1.431765, 9.244454, -0.544319, 9.713719]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Selectedparticipantsforclustering_1 = new ol.format.GeoJSON();
var features_Selectedparticipantsforclustering_1 = format_Selectedparticipantsforclustering_1.readFeatures(json_Selectedparticipantsforclustering_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Selectedparticipantsforclustering_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selectedparticipantsforclustering_1.addFeatures(features_Selectedparticipantsforclustering_1);
var lyr_Selectedparticipantsforclustering_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Selectedparticipantsforclustering_1, 
                style: style_Selectedparticipantsforclustering_1,
                popuplayertitle: 'Selected participants for clustering',
                interactive: true,
                title: '<img src="styles/legend/Selectedparticipantsforclustering_1.png" /> Selected participants for clustering'
            });
var format_participants_utmmap_clustering__selected_participants_for_clustering_2 = new ol.format.GeoJSON();
var features_participants_utmmap_clustering__selected_participants_for_clustering_2 = format_participants_utmmap_clustering__selected_participants_for_clustering_2.readFeatures(json_participants_utmmap_clustering__selected_participants_for_clustering_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_participants_utmmap_clustering__selected_participants_for_clustering_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_participants_utmmap_clustering__selected_participants_for_clustering_2.addFeatures(features_participants_utmmap_clustering__selected_participants_for_clustering_2);
var lyr_participants_utmmap_clustering__selected_participants_for_clustering_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_participants_utmmap_clustering__selected_participants_for_clustering_2, 
                style: style_participants_utmmap_clustering__selected_participants_for_clustering_2,
                popuplayertitle: 'participants_utm — map_clustering__selected_participants_for_clustering',
                interactive: true,
                title: '<img src="styles/legend/participants_utmmap_clustering__selected_participants_for_clustering_2.png" /> participants_utm — map_clustering__selected_participants_for_clustering'
            });
var format_Clusters_3 = new ol.format.GeoJSON();
var features_Clusters_3 = format_Clusters_3.readFeatures(json_Clusters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Clusters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusters_3.addFeatures(features_Clusters_3);
var lyr_Clusters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clusters_3, 
                style: style_Clusters_3,
                popuplayertitle: 'Clusters',
                interactive: true,
                title: '<img src="styles/legend/Clusters_3.png" /> Clusters'
            });
var format_Meancoordinates_4 = new ol.format.GeoJSON();
var features_Meancoordinates_4 = format_Meancoordinates_4.readFeatures(json_Meancoordinates_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Meancoordinates_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meancoordinates_4.addFeatures(features_Meancoordinates_4);
var lyr_Meancoordinates_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meancoordinates_4, 
                style: style_Meancoordinates_4,
                popuplayertitle: 'Mean coordinates',
                interactive: true,
                title: '<img src="styles/legend/Meancoordinates_4.png" /> Mean coordinates'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Selectedparticipantsforclustering_1.setVisible(true);lyr_participants_utmmap_clustering__selected_participants_for_clustering_2.setVisible(true);lyr_Clusters_3.setVisible(true);lyr_Meancoordinates_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Selectedparticipantsforclustering_1,lyr_participants_utmmap_clustering__selected_participants_for_clustering_2,lyr_Clusters_3,lyr_Meancoordinates_4];
lyr_Selectedparticipantsforclustering_1.set('fieldAliases', {'district': 'district', 'community': 'community', 'compid': 'compid', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', 'gpsaltitude': 'gpsaltitude', 'gpsaccuracy': 'gpsaccuracy', });
lyr_participants_utmmap_clustering__selected_participants_for_clustering_2.set('fieldAliases', {'fid': 'fid', 'district': 'district', 'community': 'community', 'compid': 'compid', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', 'gpsaltitude': 'gpsaltitude', 'gpsaccuracy': 'gpsaccuracy', });
lyr_Clusters_3.set('fieldAliases', {'fid': 'fid', 'district': 'district', 'community': 'community', 'compid': 'compid', 'gpslatitude': 'gpslatitude', 'gpslongitude': 'gpslongitude', 'gpsaltitude': 'gpsaltitude', 'gpsaccuracy': 'gpsaccuracy', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SIZE': 'CLUSTER_SIZE', });
lyr_Meancoordinates_4.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'CLUSTER_ID': 'CLUSTER_ID', });
lyr_Selectedparticipantsforclustering_1.set('fieldImages', {'district': 'TextEdit', 'community': 'TextEdit', 'compid': 'TextEdit', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', 'gpsaltitude': 'TextEdit', 'gpsaccuracy': 'TextEdit', });
lyr_participants_utmmap_clustering__selected_participants_for_clustering_2.set('fieldImages', {'fid': '', 'district': '', 'community': '', 'compid': '', 'gpslatitude': '', 'gpslongitude': '', 'gpsaltitude': '', 'gpsaccuracy': '', });
lyr_Clusters_3.set('fieldImages', {'fid': 'TextEdit', 'district': 'TextEdit', 'community': 'TextEdit', 'compid': 'TextEdit', 'gpslatitude': 'TextEdit', 'gpslongitude': 'TextEdit', 'gpsaltitude': 'TextEdit', 'gpsaccuracy': 'TextEdit', 'CLUSTER_ID': 'Range', 'CLUSTER_SIZE': 'Range', });
lyr_Meancoordinates_4.set('fieldImages', {'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'CLUSTER_ID': 'Range', });
lyr_Selectedparticipantsforclustering_1.set('fieldLabels', {'district': 'inline label - visible with data', 'community': 'inline label - visible with data', 'compid': 'inline label - visible with data', 'gpslatitude': 'hidden field', 'gpslongitude': 'hidden field', 'gpsaltitude': 'hidden field', 'gpsaccuracy': 'hidden field', });
lyr_participants_utmmap_clustering__selected_participants_for_clustering_2.set('fieldLabels', {'fid': 'hidden field', 'district': 'hidden field', 'community': 'hidden field', 'compid': 'hidden field', 'gpslatitude': 'hidden field', 'gpslongitude': 'hidden field', 'gpsaltitude': 'hidden field', 'gpsaccuracy': 'hidden field', });
lyr_Clusters_3.set('fieldLabels', {'fid': 'hidden field', 'district': 'inline label - visible with data', 'community': 'inline label - visible with data', 'compid': 'inline label - visible with data', 'gpslatitude': 'hidden field', 'gpslongitude': 'hidden field', 'gpsaltitude': 'hidden field', 'gpsaccuracy': 'hidden field', 'CLUSTER_ID': 'inline label - visible with data', 'CLUSTER_SIZE': 'inline label - visible with data', });
lyr_Meancoordinates_4.set('fieldLabels', {'MEAN_X': 'hidden field', 'MEAN_Y': 'hidden field', 'CLUSTER_ID': 'inline label - visible with data', });
lyr_Meancoordinates_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});