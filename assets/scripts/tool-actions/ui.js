'use strict'

// const store = require('../store')
// const appliance = applianceTemplate({ appliances: responseData.appliances })
const toolTemplate = require('../templates/tool-listing.handlebars')
// const appliance = applianceTemplate()
// const messageCheck = require('./events.js')

const onAddToolsSuccess = responseData => {
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  // console.log('create/add appliance success', responseData)
  // $('#content').html(applianceHtml)
  $('#message').text('Add Tools success. Click Show All Tools to view')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  $('#content').hide()
  // $('#content').html(applianceHtml)
}

const onAddToolsFailure = responseData => {
  // console.log('create/add appliance failure', responseData)
  $('#message').text('Add Tools failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
}

const onShowToolsSuccess = function (data, responseData) {
  // console.log('show labs success', responseData)
  const toolHtml = toolTemplate({ tools: responseData.tools })
  if (data === 'update') {
    onUpdateToolsSuccess()
  } else if (data === 'delete') {
    onDestroyToolsSuccess()
  } else {
    // const toolHtml = toolTemplate({ tools: responseData.tools })
    // console.log('responseData is ', responseData)
    if (responseData.tools.length === 0) {
      $('#message').text('No items to show, click Create Tool to add one')
      $('#message').removeClass()
      $('#message').addClass('success')
      $('#change-pw').trigger('reset')
      // appliance database actions
      $('#add-appliance').trigger('reset')
      $('.update-form').trigger('reset')
      // tool database actions
      $('#add-tool').trigger('reset')
      $('.update-toolForm').trigger('reset')
      $('#content').show()
      $('#content').html(toolHtml)
    } else {
      $('#message').text('Show Tools success')
      $('#message').removeClass()
      $('#message').addClass('success')
      $('#change-pw').trigger('reset')
      // appliance database actions
      $('#add-appliance').trigger('reset')
      $('.update-form').trigger('reset')
      // tool database actions
      $('#add-tool').trigger('reset')
      $('.update-toolForm').trigger('reset')
      $('#content').show()
      $('#content').html(toolHtml)
    }
  }
}

const onShowToolsFailure = responseData => {
  // console.log('show all failure', responseData)
  $('#message').text('Show Tool failure')
  $('#message').addClass('failure')
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
}

const onUpdateToolsSuccess = responseData => {
  // console.log('update labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  // $('#content').html(applianceHtml)
  $('#message').text('Update Tool success. Click Show All Tools to view')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
  $('#content').hide()
  // $('#content').html(applianceHtml)
}

const onUpdateToolsFailure = responseData => {
  // console.log('update labs failure', responseData)
  $('#message').text('Update Tool failure')
  $('#message').addClass('failure')
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
}

const onClearToolsSuccess = () => {
  // console.log('Clear Labs successful')
  $('#message').text('Tool listings cleared')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#content').empty()
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
}

const onDestroyToolsSuccess = responseData => {
  // console.log('destroy labs success', responseData)
  // const applianceHtml = applianceTemplate({ appliances: responseData.appliances })
  // $('#content').html(applianceHtml)
  $('#message').text('Destroy Tool success. Click Show All Tools to see')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
  $('#content').hide()
  // $('#content').html(applianceHtml)
}

const onDestroyToolsFailure = responseData => {
  // console.log('destroy labs failure', responseData)
  $('#message').text('Destroy Tool failure')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  // appliance database actions
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  // tool database actions
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
}

module.exports = {
  onAddToolsSuccess,
  onAddToolsFailure,
  onShowToolsSuccess,
  onShowToolsFailure,
  onUpdateToolsSuccess,
  onUpdateToolsFailure,
  onDestroyToolsSuccess,
  onDestroyToolsFailure,
  onClearToolsSuccess
}
