const axios = require('axios');
const date = new Date();
const date2 = new Date(date.getTime() - 1000*60*60*24*10);


const currentDate = date.getFullYear() + '-'+ (date.getMonth()+1) + '-' + date.getDate();
const previousDate = date2.getFullYear() + '-'+ (date2.getMonth()+1) + '-' + date2.getDate();


callExchange(previousDate, currentDate);

function callExchange(previousDate, currentDate) {
  const uri = `https://api.exchangeratesapi.io/history?start_at=${previousDate}&end_at=${currentDate}&base=USD`;
  axios.get(uri)
    .then(res => {
      const rates = res.data.rates;
      const currencies = Object.keys(Object.values(rates)[0]);
      const result = [];
      currencies.forEach(name => {
        const dataRate = {
          name: name,
          sumRate: 0,
          avgRate: 0,
          sumDif: 0,
          avgDif: 0,
        };
        Object.values(rates).forEach((element, index, array) => {
          dataRate.sumRate += element[name];
          dataRate.sumDif += (index > 0) ? element[name] - array[index - 1][name] : 0;
          dataRate.avgRate = dataRate.sumRate / index + 1;
          dataRate.avgDif = dataRate.sumDif / index;
        });
        delete dataRate.sumRate;
        delete dataRate.sumDif;
        result.push(dataRate);
      });
      console.log(result);
      console.log(result.sort((a,b) => a.avgRate - b.avgRate));
    });
}

