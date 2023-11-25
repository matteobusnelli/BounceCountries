"use strict";
const URL = "https://bounce-countries-backend.vercel.app/api";
//const URL = "http://localhost:3001/api";

function getJson(httpResponsePromise) {
  // server API always return JSON, in case of error the format is the following { error: <message> }
  return new Promise((resolve, reject) => {
    httpResponsePromise
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then((json) => resolve(json))
            .catch((err) => reject({ error: "Cannot parse server response" }));
        } else {
          response
            .json()
            .then((obj) => reject(obj)) // error msg in the response body
            .catch((err) => reject({ error: "Cannot parse server response" })); // something else
        }
      })
      .catch((err) => reject({ error: "Cannot communicate" })); // connection error
  });
}

async function getCountryInfo(countryName) {
  return getJson(fetch(`${URL}/countryinfo/${countryName}`));
}

export default { getCountryInfo };
