class LocationController{
    constructor() {

    }

    getCurrentLocation() {
        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
              function(position) {
                // Access latitude and longitude from the position object
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                console.log("Latitude: " + latitude);
                console.log("Longitude: " + longitude);
                return {latiude: latitude, longitude: longitude}
              },
              function(error) {
                // Handle error cases
                console.error("Error occurred. Error code: " + error.code);
              }
            );
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
    }
}

export default LocationController;

