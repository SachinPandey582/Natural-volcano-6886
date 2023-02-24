let api = "780394a78657001a17b66be2b1695f61";
var lat, lon;

const getData = async (lat, lon) => {
  let res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
  );
  let data = await res.json();
  // console.log("locationData", data)
  return data;
};

async function locationFn(e) {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000,
  });
  function success(postion) {
    lat = postion.coords.latitude;
    lon = postion.coords.longitude;
    // console.log(postion);
    getData(lat, lon).then((res) => {
      // console.log(res.address);
      let data = {
        city: res.address.county,
        state: res.address.state,
        district: res.address.state_district,
      };
      localStorage.setItem("location", JSON.stringify(data));
      // console.log(data)
      return ;
    });
    //  console.log(data);
  }

  function error(err) {
    console.error(`ERROR (${err.code}): ${err.message}`);
    return err;
  }
}











export default locationFn;
