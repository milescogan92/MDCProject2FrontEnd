'use strict'

const store = require('../store.js')

const onSignUpSuccess = function (response) {
  $('#message-area').text('Thanks for signing up, ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function (error) {
  $('#message-area').text('Sign up failed, try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message-area').text('Thanks for signing in ' + response.user.email)
  $('#sign-up-form').hide()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#index-gear-button').show()
  $('#create-gear-form').show()
  $('#update-gear-form').show()
  $('#delete-gear-form').show()

}

const onSignInFailure = function (error) {
  $('#message-area').text('Sign in failed. Please try again.')
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message-area').text('Password changed successfully!')
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message-area').text('Error, could not change password. Try again.')
  $('#change-password-form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message-area').text('Signed out successfully.')
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#index-gear-button').hide()
  $('#create-gear-form').hide()
  $('#update-gear-form').hide()
  $('#delete-gear-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()

}

const onSignOutFailure = function () {
  $('#message-area').text('Error, could not sign out.  Try again.')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure
}
