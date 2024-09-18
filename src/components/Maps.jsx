import LocationController from "./LocationController";

const Maps = () => {
    console.log(LocationController, 'location')
    const lc = new LocationController();
    console.log(lc.getCurrentLocation())
    return (
        <div>
            Maps
        </div>
    )
}

export default Maps;