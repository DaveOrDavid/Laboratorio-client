const store = require('../store.js')

const onSignUpSuccess = responseData => {
  console.log('sign up success', responseData)
  $('#message').text('Sign up successful. Please sign into Laborator.io')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = responseData => {
  console.log('sign up failure', responseData)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = responseData => {
  console.log('sign in success', responseData)
  $('#message').text('Signed in successfully to Laborator.io')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').trigger('reset')
  store.user = responseData.user
}

const onSignInFailure = responseData => {
  console.log('sign in failure', responseData)
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = responseData => {
  console.log('change password success', responseData)
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#change-pw').trigger('reset')
}

const onChangePasswordFailure = responseData => {
  console.log('change password failure', responseData)
  $('#message').removeClass()
  $('#change-pw').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
