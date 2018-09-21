const baseUrl = 'http://10.7.225.130:8080/SPCRM/';
//const baseUrl = 'http://219.140.162.169:8850/sand/';
//const baseUrl = 'http://10.6.181.55:8012/SPCRM/';

const token = '';

/**
 * @param {string} serviceName 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {json} [param=''] body的请求参数，默认为空
 * **/


function fetchRequest(serviceName, method, params = '') {
  let header = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  console.log('request url:', baseUrl + serviceName, params);  //打印请求参数
  if (params === '') {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + serviceName, {
        method: method,
        headers: header
      }).then(response => response.json())
        .then(responseData => {
          console.log('res:', serviceName, responseData);
          resolve(responseData);
        }).catch(err => {
          console.log('error:', serviceName, err);
          reject(err);
        })
    })
  } else {
    /* const body = [];
    for (let key in params) {
      let item = (key + '=' + params[key]);
      body.push(item);
    } */
    return new Promise((resolve, reject) => {
      fetch(baseUrl + serviceName, {
        method: method,
        headers: header,
        body: JSON.stringify(params)
      }).then(response => response.json())
        .then(responseData => {
          console.log('res:', serviceName, responseData);
          resolve(responseData);
        }).catch(err => {
          console.log('error:', serviceName, err);
          reject(err);
        })
    })
  }
}
export { fetchRequest }
//exports.fetchRequest = fetchRequest;