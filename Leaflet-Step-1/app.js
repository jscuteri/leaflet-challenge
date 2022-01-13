// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

async function main() {
    const response = await fetch(queryUrl);
    const data = await response.json();
    console.log(data);
}