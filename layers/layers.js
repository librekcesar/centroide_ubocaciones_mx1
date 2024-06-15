var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MX1_SPMX1_1 = new ol.format.GeoJSON();
var features_MX1_SPMX1_1 = format_MX1_SPMX1_1.readFeatures(json_MX1_SPMX1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MX1_SPMX1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MX1_SPMX1_1.addFeatures(features_MX1_SPMX1_1);
var lyr_MX1_SPMX1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MX1_SPMX1_1, 
                style: style_MX1_SPMX1_1,
                interactive: false,
                title: '<img src="styles/legend/MX1_SPMX1_1.png" /> MX1_SPMX1'
            });
var format_ubicaciones_mx1_felipe_2 = new ol.format.GeoJSON();
var features_ubicaciones_mx1_felipe_2 = format_ubicaciones_mx1_felipe_2.readFeatures(json_ubicaciones_mx1_felipe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ubicaciones_mx1_felipe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ubicaciones_mx1_felipe_2.addFeatures(features_ubicaciones_mx1_felipe_2);cluster_ubicaciones_mx1_felipe_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ubicaciones_mx1_felipe_2
});
var lyr_ubicaciones_mx1_felipe_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ubicaciones_mx1_felipe_2, 
                style: style_ubicaciones_mx1_felipe_2,
                interactive: false,
                title: '<img src="styles/legend/ubicaciones_mx1_felipe_2.png" /> ubicaciones_mx1_felipe'
            });
var format_centroide_ubicaciones_MX1_3 = new ol.format.GeoJSON();
var features_centroide_ubicaciones_MX1_3 = format_centroide_ubicaciones_MX1_3.readFeatures(json_centroide_ubicaciones_MX1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroide_ubicaciones_MX1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroide_ubicaciones_MX1_3.addFeatures(features_centroide_ubicaciones_MX1_3);
var lyr_centroide_ubicaciones_MX1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centroide_ubicaciones_MX1_3, 
                style: style_centroide_ubicaciones_MX1_3,
                interactive: true,
                title: '<img src="styles/legend/centroide_ubicaciones_MX1_3.png" /> centroide_ubicaciones_MX1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MX1_SPMX1_1.setVisible(true);lyr_ubicaciones_mx1_felipe_2.setVisible(true);lyr_centroide_ubicaciones_MX1_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MX1_SPMX1_1,lyr_ubicaciones_mx1_felipe_2,lyr_centroide_ubicaciones_MX1_3];
lyr_MX1_SPMX1_1.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_ubicaciones_mx1_felipe_2.set('fieldAliases', {'Folio': 'Folio', '# Cliente': '# Cliente', 'Fecha de creación': 'Fecha de creación', 'Recolección programada': 'Recolección programada', 'Tipo de envío': 'Tipo de envío', 'Tamaño': 'Tamaño', '1er evento de recolección (eventos 2003, 30001, 4001): Fecha': '1er evento de recolección (eventos 2003, 30001, 4001): Fecha', 'ETA Cliente: Fecha': 'ETA Cliente: Fecha', 'Conductor asignado para entrega: Fecha (1er evento)': 'Conductor asignado para entrega: Fecha (1er evento)', '1er intento de entrega': '1er intento de entrega', 'Entrega confirmada: Fecha (1er evento)': 'Entrega confirmada: Fecha (1er evento)', 'ETA Cliente: Detalles de KPI': 'ETA Cliente: Detalles de KPI', 'Empresa': 'Empresa', 'Carrier ID': 'Carrier ID', 'External Tracking ID': 'External Tracking ID', 'Servicio': 'Servicio', '$ COD': '$ COD', 'COD Pagado por Don veloz': 'COD Pagado por Don veloz', 'Estatus COD (notificación vía WhatsApp)': 'Estatus COD (notificación vía WhatsApp)', 'City to city': 'City to city', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'Origen: Zonificación': 'Origen: Zonificación', 'Origen: CP': 'Origen: CP', 'Origen:Estación': 'Origen:Estación', 'Destino: Coordenadas': 'Destino: Coordenadas', 'Destino: Zonificación': 'Destino: Zonificación', 'Destino:CP': 'Destino:CP', 'Destino: Estación': 'Destino: Estación', 'Destino: Alcaldía': 'Destino: Alcaldía', 'Último evento: Fecha': 'Último evento: Fecha', 'Último evento: Evento': 'Último evento: Evento', 'Último evento: Don Veloz': 'Último evento: Don Veloz', 'Último evento: Nombre Don Veloz': 'Último evento: Nombre Don Veloz', 'Último evento: Proveedor': 'Último evento: Proveedor', 'Inducción (3001): Fecha (1er evento)': 'Inducción (3001): Fecha (1er evento)', 'Inducción (3001): Fecha (último evento)': 'Inducción (3001): Fecha (último evento)', 'Inducción (3001): Estación (último evento)': 'Inducción (3001): Estación (último evento)', 'Line haul (3004): Fecha (1er evento)': 'Line haul (3004): Fecha (1er evento)', 'Conductor asignado para entrega: Fecha': 'Conductor asignado para entrega: Fecha', 'Conductor asignado para entrega: Intentos': 'Conductor asignado para entrega: Intentos', 'Conductor asignado para entrega: Don Veloz': 'Conductor asignado para entrega: Don Veloz', 'Conductor asignado para entrega: Nombre Don Veloz': 'Conductor asignado para entrega: Nombre Don Veloz', 'Conductor asignado para entrega: Proveedor': 'Conductor asignado para entrega: Proveedor', 'Entrega fallida: Fecha': 'Entrega fallida: Fecha', 'Entrega fallida: Motivo': 'Entrega fallida: Motivo', 'Entrega fallida: Intentos': 'Entrega fallida: Intentos', 'Entrega fallida: Coordenadas de cierre': 'Entrega fallida: Coordenadas de cierre', 'Entrega fallida: diferencia entre coordenadas destino y cierre (mts)': 'Entrega fallida: diferencia entre coordenadas destino y cierre (mts)', 'Días entre el 1er evento de recolección (estatus 2, 4, 4.2) hasta la entrega (estatus 6, 12, 19)': 'Días entre el 1er evento de recolección (estatus 2, 4, 4.2) hasta la entrega (estatus 6, 12, 19)', 'Entrega confirmada: Fecha': 'Entrega confirmada: Fecha', 'Entrega confirmada: Don Veloz': 'Entrega confirmada: Don Veloz', 'Entrega confirmada: Nombre Don Veloz': 'Entrega confirmada: Nombre Don Veloz', 'Entrega confirmada: Proveedor': 'Entrega confirmada: Proveedor', 'Entrega confirmada: Coordenadas de cierre': 'Entrega confirmada: Coordenadas de cierre', 'Entrega confirmada: diferencia entre coordenadas destino y cierre (mts)': 'Entrega confirmada: diferencia entre coordenadas destino y cierre (mts)', 'Conductor asignado para devolución: Fecha': 'Conductor asignado para devolución: Fecha', 'Devolución fallida: Fecha': 'Devolución fallida: Fecha', 'Devolución fallida: Motivo': 'Devolución fallida: Motivo', 'Devolución confirmada: Fecha': 'Devolución confirmada: Fecha', 'Devolución confirmada: Don Veloz': 'Devolución confirmada: Don Veloz', 'Devolución confirmada: Nombre Don Veloz': 'Devolución confirmada: Nombre Don Veloz', 'Devolución confirmada: Proveedor': 'Devolución confirmada: Proveedor', });
lyr_centroide_ubicaciones_MX1_3.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'estacion': 'estacion', });
lyr_MX1_SPMX1_1.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_ubicaciones_mx1_felipe_2.set('fieldImages', {'Folio': '', '# Cliente': '', 'Fecha de creación': '', 'Recolección programada': '', 'Tipo de envío': '', 'Tamaño': '', '1er evento de recolección (eventos 2003, 30001, 4001): Fecha': '', 'ETA Cliente: Fecha': '', 'Conductor asignado para entrega: Fecha (1er evento)': '', '1er intento de entrega': '', 'Entrega confirmada: Fecha (1er evento)': '', 'ETA Cliente: Detalles de KPI': '', 'Empresa': '', 'Carrier ID': '', 'External Tracking ID': '', 'Servicio': '', '$ COD': '', 'COD Pagado por Don veloz': '', 'Estatus COD (notificación vía WhatsApp)': '', 'City to city': '', 'LATITUD': '', 'LONGITUD': '', 'Origen: Zonificación': '', 'Origen: CP': '', 'Origen:Estación': '', 'Destino: Coordenadas': '', 'Destino: Zonificación': '', 'Destino:CP': '', 'Destino: Estación': '', 'Destino: Alcaldía': '', 'Último evento: Fecha': '', 'Último evento: Evento': '', 'Último evento: Don Veloz': '', 'Último evento: Nombre Don Veloz': '', 'Último evento: Proveedor': '', 'Inducción (3001): Fecha (1er evento)': '', 'Inducción (3001): Fecha (último evento)': '', 'Inducción (3001): Estación (último evento)': '', 'Line haul (3004): Fecha (1er evento)': '', 'Conductor asignado para entrega: Fecha': '', 'Conductor asignado para entrega: Intentos': '', 'Conductor asignado para entrega: Don Veloz': '', 'Conductor asignado para entrega: Nombre Don Veloz': '', 'Conductor asignado para entrega: Proveedor': '', 'Entrega fallida: Fecha': '', 'Entrega fallida: Motivo': '', 'Entrega fallida: Intentos': '', 'Entrega fallida: Coordenadas de cierre': '', 'Entrega fallida: diferencia entre coordenadas destino y cierre (mts)': '', 'Días entre el 1er evento de recolección (estatus 2, 4, 4.2) hasta la entrega (estatus 6, 12, 19)': '', 'Entrega confirmada: Fecha': '', 'Entrega confirmada: Don Veloz': '', 'Entrega confirmada: Nombre Don Veloz': '', 'Entrega confirmada: Proveedor': '', 'Entrega confirmada: Coordenadas de cierre': '', 'Entrega confirmada: diferencia entre coordenadas destino y cierre (mts)': '', 'Conductor asignado para devolución: Fecha': '', 'Devolución fallida: Fecha': '', 'Devolución fallida: Motivo': '', 'Devolución confirmada: Fecha': '', 'Devolución confirmada: Don Veloz': '', 'Devolución confirmada: Nombre Don Veloz': '', 'Devolución confirmada: Proveedor': '', });
lyr_centroide_ubicaciones_MX1_3.set('fieldImages', {'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'estacion': 'TextEdit', });
lyr_MX1_SPMX1_1.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_ubicaciones_mx1_felipe_2.set('fieldLabels', {'Folio': 'no label', '# Cliente': 'no label', 'Fecha de creación': 'no label', 'Recolección programada': 'no label', 'Tipo de envío': 'no label', 'Tamaño': 'no label', '1er evento de recolección (eventos 2003, 30001, 4001): Fecha': 'no label', 'ETA Cliente: Fecha': 'no label', 'Conductor asignado para entrega: Fecha (1er evento)': 'no label', '1er intento de entrega': 'no label', 'Entrega confirmada: Fecha (1er evento)': 'no label', 'ETA Cliente: Detalles de KPI': 'no label', 'Empresa': 'no label', 'Carrier ID': 'no label', 'External Tracking ID': 'no label', 'Servicio': 'no label', '$ COD': 'no label', 'COD Pagado por Don veloz': 'no label', 'Estatus COD (notificación vía WhatsApp)': 'no label', 'City to city': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'Origen: Zonificación': 'no label', 'Origen: CP': 'no label', 'Origen:Estación': 'no label', 'Destino: Coordenadas': 'no label', 'Destino: Zonificación': 'no label', 'Destino:CP': 'no label', 'Destino: Estación': 'no label', 'Destino: Alcaldía': 'no label', 'Último evento: Fecha': 'no label', 'Último evento: Evento': 'no label', 'Último evento: Don Veloz': 'no label', 'Último evento: Nombre Don Veloz': 'no label', 'Último evento: Proveedor': 'no label', 'Inducción (3001): Fecha (1er evento)': 'no label', 'Inducción (3001): Fecha (último evento)': 'no label', 'Inducción (3001): Estación (último evento)': 'no label', 'Line haul (3004): Fecha (1er evento)': 'no label', 'Conductor asignado para entrega: Fecha': 'no label', 'Conductor asignado para entrega: Intentos': 'no label', 'Conductor asignado para entrega: Don Veloz': 'no label', 'Conductor asignado para entrega: Nombre Don Veloz': 'no label', 'Conductor asignado para entrega: Proveedor': 'no label', 'Entrega fallida: Fecha': 'no label', 'Entrega fallida: Motivo': 'no label', 'Entrega fallida: Intentos': 'no label', 'Entrega fallida: Coordenadas de cierre': 'no label', 'Entrega fallida: diferencia entre coordenadas destino y cierre (mts)': 'no label', 'Días entre el 1er evento de recolección (estatus 2, 4, 4.2) hasta la entrega (estatus 6, 12, 19)': 'no label', 'Entrega confirmada: Fecha': 'no label', 'Entrega confirmada: Don Veloz': 'no label', 'Entrega confirmada: Nombre Don Veloz': 'no label', 'Entrega confirmada: Proveedor': 'no label', 'Entrega confirmada: Coordenadas de cierre': 'no label', 'Entrega confirmada: diferencia entre coordenadas destino y cierre (mts)': 'no label', 'Conductor asignado para devolución: Fecha': 'no label', 'Devolución fallida: Fecha': 'no label', 'Devolución fallida: Motivo': 'no label', 'Devolución confirmada: Fecha': 'no label', 'Devolución confirmada: Don Veloz': 'no label', 'Devolución confirmada: Nombre Don Veloz': 'no label', 'Devolución confirmada: Proveedor': 'no label', });
lyr_centroide_ubicaciones_MX1_3.set('fieldLabels', {'MEAN_X': 'header label', 'MEAN_Y': 'header label', 'estacion': 'header label', });
lyr_centroide_ubicaciones_MX1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});