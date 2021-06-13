var axios = require('axios');
var _ = require('lodash')
const puppeteer = require('puppeteer')

var config = {
  method: 'get',
  url: 'https://vnexpress.net/microservice/getrule1folder/category_id/1003426,1001117/zone_id/509,510/limit/4/intCateId/1001007',
  headers: { 
    'Cookie': 'device_env=4'
  }
};

axios(config)
.then(async function (response) {
    let data = JSON.stringify(response.data);
    let jsonData = JSON.parse(data)
    let dataVnExpress = jsonData.data;
    let products = [];

    let elementDataOne = dataVnExpress[Object.keys(dataVnExpress)[0]];
    let dataObject = elementDataOne.data
    let vnexpressData = dataObject[0]

    await asyncForEach(dataObject, async(element)=>{
        let url = element.share_url
        console.log(url)
    })
    
})
.catch(function (error) {
  console.log(error);
});



const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};