'use strict'

// const store = require('../store')
// const appliance = applianceTemplate({ appliances: responseData.appliances })
const applianceTemplate = require('../templates/appliance-listing.handlebars')
// const appliance = applianceTemplate()
// const messageCheck = require('./events.js')

const onAddLabsSuccess = responseData => {
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  // console.log('create/add appliance success', responseData)
  // $('#content').html(applianceHtml)
  $('#message').text('Add Appliance success. Click Show All Appliances to view')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  $('#content').hide()
  // $('#content').html(applianceHtml)
}

const onAddLabsFailure = responseData => {
  // console.log('create/add appliance failure', responseData)
  $('#message').text('Add Appliance failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
}

const onShowLabsSuccess = function (data, responseData) {
  // console.log('show labs success', responseData)
  const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  if (data === 'update') {
    onUpdateLabsSuccess()
  } else if (data === 'delete') {
    onDestroyLabsSuccess()
  } else {
    // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
    // console.log('responseData is ', responseData)
    if (responseData.appliances.length === 0) {
      $('#message').text('No items to show, click Create Appliance to add one')
      $('#message').removeClass()
      $('#message').addClass('success')
      $('#change-pw').trigger('reset')
      $('#add-appliance').trigger('reset')
      $('.update-form').trigger('reset')
      $('#content').show()
      $('#content').html(applianceHtml)
    } else {
      $('#message').text('Show Appliances success')
      $('#message').removeClass()
      $('#message').addClass('success')
      $('#change-pw').trigger('reset')
      $('#add-appliance').trigger('reset')
      $('.update-form').trigger('reset')
      $('#content').show()
      $('#content').html(applianceHtml)
    }
  }
}

const onShowLabsFailure = responseData => {
  // console.log('show all failure', responseData)
  $('#message').text('Show Appliance failure')
  $('#message').addClass('failure')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
}

const onUpdateLabsSuccess = responseData => {
  // console.log('update labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  // $('#content').html(applianceHtml)
  $('#message').text('Update Appliance success. Click Show All Appliances to view')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  $('#content').hide()
  // $('#content').html(applianceHtml)
}

const onUpdateLabsFailure = responseData => {
  // console.log('update labs failure', responseData)
  $('#message').text('Update Appliance failure')
  $('#message').addClass('failure')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
}

const onClearLabsSuccess = () => {
  // console.log('Clear Labs successful')
  $('#message').text('Appliance listings cleared')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#content').empty()
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
}

const onDestroyLabsSuccess = responseData => {
  console.log('destroy labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  // $('#content').html(applianceHtml)
  $('#message').text('Destroy Appliance success. Click Show All Appliances to see')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  $('#content').hide()
  // $('#content').html(applianceHtml)
}

const onDestroyLabsFailure = responseData => {
  // console.log('destroy labs failure', responseData)
  $('#message').text('Destroy Appliance failure')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
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
