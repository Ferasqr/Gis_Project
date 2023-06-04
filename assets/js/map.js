 //Add the Bing Maps layers
    var BING_MAPS_KEY = "cdSuP79ZvtPNL7cArZul~4HbLke3RP3rG7VKWs9RLUw~AhEyFJPxWCzeFokp2N7LV4mjGWEHGOWjyoJIlnayrAKvc4NYFYKn8OAHOLMs30rM";
    var bingRoads = new ol.layer.Tile({
        title: 'Bing Maps Roads',
        type: 'base',
        visible: false,
        source: new ol.source.BingMaps({
            key: BING_MAPS_KEY,
            imagerySet: 'Road'
        })
    });
    var bingAerial = new ol.layer.Tile({
        title: 'Bing Maps Aerial',
        type: 'base',
        visible: false,
        source: new ol.source.BingMaps({
            key: BING_MAPS_KEY,
            imagerySet: 'Aerial'
        })
    });
    
    //Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
    basemapLayers.getLayers().extend([stamenWatercolor, darkLayer, lightLayer, bingRoads,bingAerial]);
