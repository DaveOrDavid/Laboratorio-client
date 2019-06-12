'use strict'

// const store = require('../store')
const applianceTemplate = require('../templates/appliance-listing.handlebars')
const messageCheck = require('./events.js')

const onAddLabsSuccess = responseData => {
  // console.log('create/add appliance success', responseData)
  $('#message').text('create/add appliance success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onAddLabsFailure = responseData => {
  // console.log('create/add appliance failure', responseData)
  $('#message').text('create/add appliance failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

// const onOnlyShowLabsSuccess = responseData => {
//   console.log('show labs success', responseData)
//   const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
//   $('#message').text('Show labs success')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#sign-up').trigger('reset')
//   $('#sign-in').trigger('reset')
//   $('#change-pw').trigger('reset')
//   $('#add-appliance').trigger('reset')
//   $('#content').html(applianceHtml)
// }

const onShowLabsSuccess = function (data, responseData) {
  // console.log('show labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  if (data === 'update') {
    onUpdateLabsSuccess()
  } else if (data === 'delete') {
    onDestroyLabsSuccess()
  } else {
    const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
    $('#message').text('Success')
    $('#message').removeClass()
    $('#message').addClass('success')
    $('#sign-up').trigger('reset')
    $('#sign-in').trigger('reset')
    $('#change-pw').trigger('reset')
    $('#add-appliance').trigger('reset')
    $('#content').html(applianceHtml)
  }
}

const onShowLabsFailure = responseData => {
  // console.log('show all failure', responseData)
  $('#message').text('Show labs failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onUpdateLabsSuccess = responseData => {
  // console.log('update labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  $('#message').text('update labs success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  // $('#content').html(applianceHtml)
}

const onUpdateLabsFailure = responseData => {
  // console.log('update labs failure', responseData)
  $('#message').text('update labs failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onClearLabsSuccess = () => {
  // console.log('Clear Labs successful')
  $('#message').text('Appliance listings cleared')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#content').empty()
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onDestroyLabsSuccess = responseData => {
  // console.log('destroy labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  $('#message').text('Destroy labs success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  // $('#content').html(applianceHtml)
}

const onDestroyLabsFailure = responseData => {
  // console.log('destroy labs failure', responseData)
  $('#message').text('Destroy labs failure')
  $('#message').removeClass()
  $('#message').addClass('success')
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
  onDestroyLabsFailure,
  onClearLabsSuccess
}
