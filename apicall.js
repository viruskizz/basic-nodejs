const axios = require('axios');
const uri = 'http://air4thai.pcd.go.th/services/getNewAQI_JSON.php';
axios.get(uri)
  .then((response) => {
    // console.log(response.data);
    const count = response.data.stations.length;
    let sum25 = 0;
    response.data.stations.forEach((element, index, array) => {
      const value = parseInt(element.LastUpdate.PM25.value);
      if(value) {
        sum25 += value;
      }
    });
    console.log('stations total : ' + count);
    console.log("Avg PM2.5 : ", sum25/count);
  })
  .catch(error => console.log(error));
