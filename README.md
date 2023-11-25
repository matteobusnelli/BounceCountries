# Bounce Insights Countries

## Busnelli Matteo

## Environment set up, start and use application

### Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Cloning the Repository

- Clone this repository to your local machine using the following command: git clone https://github.com/matteobusnelli/BounceCountries

### Backend set up

- Navigate to the /backend directory: cd backend
- Install backend dependencies: npm install
- Start the backend server using nodemon: nodemon

### Frontend set up

- open a new terminal
- Navigate to the /frontend directory: cd frontend
- Install frontend dependencies: npm install
- Start the React frontend: npm run dev

## API Server

- GET `/api/countryinfo/:name`
  - Description: API to get country's informations in base of country name
  - Request body: _None_
  - Response: `200 OK` (success) or `404 Not found` (not found) or `500 Internal Server Error` (generic error).
  - Response body: an object
    ```
        {
            countryData: {altSpellings: ['IT', 'Italian Republic', 'Repubblica italiana'],
                          area: 301336,
                          name: {common: 'Italy', official: 'Italian Republic', nativeName: {…}},
                          ...}
            bordersNames: ['San Marino', 'France', 'Vatican City', 'Switzerland', 'Austria', 'Slovenia']
        }
    ```

## Main React Components

- `HomePage` (in `Components/HomePage.jsx`): component that holds a React state to contain informations of the searched country. In this component, we have a 'handleSubmit' function that allows triggering the API to retrieve information about the country entered in the text area. The loading and errorMsg React states handle waiting for API calls and errors occured, respectively.
- `CountryData` (in `Components/CountryData.jsx`): component that receives as props the country informations and display them.

## Backend Tests

- Navigate to the /backend directory: cd backend
- Run index unit test: npm test

### Test coverage

- Run: npm test:coverage
