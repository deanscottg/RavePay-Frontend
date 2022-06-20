export const API_URL = process.env.REACT_APP_STAGE === 'dev'
    ? 'http://localhost:3000'
    : 'https://ravepay-app-backend.herokuapp.com';