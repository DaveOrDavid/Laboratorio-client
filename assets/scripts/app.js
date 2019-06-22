'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const searchEvents = require('./lab-actions/events')
const toolEvents = require('./tool-actions/events')

$(() => {
  // authentication events on client side
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  // events on Appliance database side
  $('#add-appliance').on('submit', searchEvents.onAddLabs)
  $('#show-labs').on('submit', searchEvents.onShowLabs)
  $('.content').on('submit', '.update-form', searchEvents.onUpdateLabs)
  $('.content').on('click', '.remove-appliance', searchEvents.onDestroyLabs)
  $('.content').on('click', '.clearLabsButton', searchEvents.onClearLabs)
  // events on Tools database side
  $('#add-tool').on('submit', toolEvents.onAddTools)
  $('#show-tools').on('submit', toolEvents.onShowTools)
  $('.content').on('submit', '.update-toolForm', toolEvents.onUpdateTools)
  $('.content').on('click', '.remove-tool', toolEvents.onDestroyTools)
  $('.content').on('click', '.clearToolsButton', toolEvents.onClearTools)
})
