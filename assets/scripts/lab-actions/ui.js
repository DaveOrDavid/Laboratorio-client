'use strict'

const store = require('../store')
const applianceTemplate = require('../templates/appliance-listing.handlebars')

const onAddLabsSuccess = responseData => {
  console.log('create/add appliance success', responseData)
  $('#message').text('create/add appliance success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onAddLabsFailure = responseData => {
  console.log('create/add appliance failure', responseData)
  $('#message').text('create/add appliance failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onShowLabsSuccess = responseData => {
  console.log('show all success', responseData)
  const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  $('#message').text('Show labs success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('#content').html(applianceHtml)
}

const onShowLabsFailure = responseData => {
  console.log('show all failure', responseData)
  $('#message').text('Show labs failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onUpdateLabsSuccess = responseData => {
  console.log('update labs success', responseData)
  const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  $('#message').text('update labs success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('#content').html(applianceHtml)
}

const onUpdateLabsFailure = responseData => {
  console.log('update labs failure', responseData)
  $('#message').text('update labs failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onDestroyLabsSuccess = responseData => {
  console.log('destroy labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  $('#message').text('destroy labs success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  // $('#content').html(applianceHtml)
}

const onDestroyLabsFailure = responseData => {
  console.log('destroy labs failure', responseData)
  $('#message').text('destroy labs failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

module.exports = {
  onAddLabsSuccess,
  onAddLabsFailure,
  onShowLabsSuccess,
  onShowLabsFailure,
  onUpdateLabsSuccess,
  onUpdateLabsFailure,
  onDestroyLabsSuccess,
  onDestroyLabsFailure
}
