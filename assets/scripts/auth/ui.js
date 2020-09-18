'use strict'

const store = require('../store.js')

const onSignUpSuccess = function (response) {
  $('#message-area').text('Thanks for signing up, ' response.user.email)
  $('#sign-up-form').trigger('reset')
}

const onSignUpFailure = function (error) {
  $('#message-area').text('Sign up failed, try again.')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message-area').text('Thanks for signing in, ' response.user.email)
  $('#sign-in-form').trigger('reset')
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
}

const onSignOutFailure = function () {
  $('#message-area').text('Error, could not sign out.  Try again.')
}
