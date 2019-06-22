'use strict'

const store = require('../store.js')
const config = require('../config.js')
const id = require('./events.js')

const postTools = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/tools/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getTools = (formData) => {
  return $.ajax({
    method: 'GET',
    // url: config.apiUrl + '/appliances/' + store.appliance.id,
    // removing above as function is a GET all vs. single resource
    url: config.apiUrl + '/tools/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const patchTools = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/tools/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    id
  })
}

const delTools = (id) => {
  return $.ajax({
    url: config.apiUrl + '/tools/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: id
  })
}

module.exports = {
  postTools,
  getTools,
  patchTools,
  delTools
}
