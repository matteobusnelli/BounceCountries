"use strict";
const request = require("supertest");
const app = require("../index");

describe("Test GET /api/countryinfo/:name", () => {
  let mockedCountry = "nonexistingcountry";

  test("T1 non-existing country name", (done) => {
    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(404);
        expect(res.body).toEqual({ countryNotFoundError: "Country not found" });
        done();
      })
      .catch((err) => done(err));
  });

  mockedCountry = "italy";
  test("T2 existing country name (country with boarders)", (done) => {
    const resultMocked = {
      /*TO-DO*/
    };
    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(resultMocked);
        done();
      })
      .catch((err) => done(err));
  });

  mockedCountry = "japan";
  test("T3 existing country name (country without boarders)", (done) => {
    const resultMocked = {
      /*TO-DO*/
    };
    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(resultMocked);
        done();
      })
      .catch((err) => done(err));
  });
});

/*
// app.js
const fetch = require('node-fetch');

app.get("/api/countryinfo/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const countryData = await response.json();

    if (countryData.status === 404) {
      res.status(404).json({ countryNotFoundError: "Country not found" });
    } else {
      let objToReturn = { countryData: countryData[0] };
      if (countryData[0].borders) {
        const codes = countryData[0].borders.join(",");
        const borsersResponse = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codes}`
        );
        const borders = await borsersResponse.json();
        const bordersNames = borders.map((country) => country.name.common);
        objToReturn.bordersNames = bordersNames;
      }
      res.json(objToReturn);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.test.js
const fetch = require('node-fetch');
const app = require('../app');

jest.mock('node-fetch');

describe('GET /api/countryinfo/:name', () => {
  it('handles internal server error (status 500)', async () => {
    const mockResponse = {
      json: jest.fn(),
    };
    fetch.mockResolvedValue(mockResponse);

    mockResponse.json.mockRejectedValue(new Error('Some error'));

    const req = { params: { name: 'example' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await app.get('/api/countryinfo/:name', req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});

*/
