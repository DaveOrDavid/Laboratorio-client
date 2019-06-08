'use strict'

let apiUrl
const apiUrls = {
  production: 'https://intense-cove-31336.herokuapp.com/', // Heroko URL
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
