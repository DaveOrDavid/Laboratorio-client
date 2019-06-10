'use strict'

const store = require('../store.js')
const config = require('../config.js')

const getLabs = (formData) => {
  return $.ajax({
    method: 'GET',
    // url: config.apiUrl + '/appliances/' + store.appliance.id,
    // removing above as function is a GET all vs. single resource
    url: config.apiUrl + '/appliances/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  getLabs
}
