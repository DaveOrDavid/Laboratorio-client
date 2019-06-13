'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const searchEvents = require('./lab-actions/events')

$(() => {
  // authentication events on client side
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  // database search events on client side
  $('#add-appliance').on('submit', searchEvents.onAddLabs)
  $('#show-labs').on('submit', searchEvents.onShowLabs)
  // $('#update-appliance').on('submit', searchEvents.onUpdateLabs)
  // $('#update-form').on('submit', handlebarEvents.onUpdateLabs)
  // thought I needed to require Handlebar file in app file.
  // $('#destroy-appliance').on('submit', searchEvents.onDestroyLabs)
  $('.content').on('submit', '.update-form', searchEvents.onUpdateLabs)
  $('.content').on('click', '.remove-appliance', searchEvents.onDestroyLabs)
  // $('.content').on('click', '.remove-appliance', searchEvents.onShowLabs)
  // ^^ access parent for Handlbars tbd
  $('.content').on('click', '.clearLabsButton', searchEvents.onClearLabs)
  // $('.clearLabsButton').on('click', searchEvents.onClearLabs)
})
