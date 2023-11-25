"use strict";
const request = require("supertest");
const { app, server } = require("../index");

beforeAll(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "log").mockImplementation(() => {});
  jest.spyOn(console, "info").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
});
afterAll((done) => {
  jest.restoreAllMocks();
  server.close(done);
});

describe("Test GET /api/countryinfo/:name", () => {
  let mockedCountry;
  test("T1 non-existing country name (ERROR 404)", (done) => {
    mockedCountry = "nonexistingcountry";
    const mockedNotFound = { status: 404 };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockedNotFound),
      status: 404,
    });

    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(404);
        expect(res.body).toEqual({ countryNotFoundError: "Country not found" });
        done();
      })
      .catch((err) => done(err));
  });

  test("T2 internal server error (ERROR 500)", (done) => {
    mockedCountry = "italy";
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() => Promise.reject("Fake error"));

    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(500);
        expect(res.body).toEqual({ error: "Internal Server Error" });
        done();
      })
      .catch((err) => done(err));
  });

  test("T3 successful response (country with borders) (STATUS 200)", (done) => {
    mockedCountry = "italy";
    const mockedCountryData = [
      {
        name: {
          common: "Italy",
          official: "Italian Republic",
        },
        borders: ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
      },
      {
        otherCountryData: "other country data",
      },
    ];
    const mockedCountryBorders = [
      {
        name: {
          common: "San Marino",
        },
      },
      {
        name: {
          common: "France",
        },
      },
      {
        name: {
          common: "Vatican City",
        },
      },
      {
        name: {
          common: "Switzerland",
        },
      },
      {
        name: {
          common: "Austria",
        },
      },
      {
        name: {
          common: "Slovenia",
        },
      },
    ];

    jest
      .spyOn(global, "fetch")
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockedCountryData),
        status: 200,
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockedCountryBorders),
        status: 200,
      });

    const mockReturnObj = {
      countryData: mockedCountryData[0],
      bordersNames: mockedCountryBorders.map((country) => country.name.common),
    };

    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockReturnObj);
        done();
      })
      .catch((err) => done(err));
  });

  test("T4 successful response (country without borders) (STATUS 200)", (done) => {
    mockedCountry = "japan";
    const mockedCountryData = [
      {
        name: {
          common: "Japan",
          official: "Japan",
        },
      },
      {
        otherCountryData: "other country data",
      },
    ];

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockedCountryData),
      status: 200,
    });

    const mockReturnObj = {
      countryData: mockedCountryData[0],
    };

    request(app)
      .get(`/api/countryinfo/${mockedCountry}`)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(mockReturnObj);
        done();
      })
      .catch((err) => done(err));
  });
});
