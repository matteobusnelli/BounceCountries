"use strict";
const URL = "http://localhost:3001/api";

async function getCountryInfo(countryName) {
  try {
    const response = await fetch(`${URL}/countryinfo/${countryName}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const countryData = await response.json();
    return countryData;
  } catch (error) {
    console.error("Error fetching country data:", error);
    //throw countryData;
  }
}

export default { getCountryInfo };
