const store = require('../store.js')

const onSignUpSuccess = responseData => {
  console.log('sign up success', responseData)
  $('#message').text('Sign up successful. Please sign into Laborator.io')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.in-app').hide()
  $('.launch-auth').show()
  $('#content').empty()
}

const onSignUpFailure = responseData => {
  console.log('sign up failure', responseData)
  $('#message').text('Sign Up attempt failed')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.in-app').hide()
  $('.launch-auth').show()
}

const onSignInSuccess = responseData => {
  console.log('sign in success', responseData)
  $('#message').text('Signed in successfully to Laborator.io')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.in-app').show()
  $('.launch-auth').hide()
  $('#content').empty()
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  console.log('sign in failure', responseData)
  $('#message').text('Sign in failure')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.in-app').hide()
  $('.launch-auth').show()
}

const onChangePasswordSuccess = responseData => {
  console.log('change password success', responseData)
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  console.log('change password failure', responseData)
  $('#message').text('Change password attempt failed')
  $('#message').removeClass()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
}

const onSignOutSuccess = responseData => {
  $('#message').text('Signed out succesfully, goodbye!')
  $('#message').removeClass()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.in-app').hide()
  $('.launch-auth').show()
  $('#content').empty()
}

const onSignOutFailure = responseData => {
  $('#message').text('Sign out failure')
  $('#message').removeClass()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.in-app').show()
  $('.launch-auth').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
