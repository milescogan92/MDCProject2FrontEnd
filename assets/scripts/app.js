'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gearEvents = require('./gear/events.js')

$(() => {
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#index-gear-button').hide()
  $('#create-gear-form').hide()
  $('#update-gear-form').hide()
  $('#delete-gear-form').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#index-gear-button').on('click', gearEvents.onIndexGear)
  $('#create-gear-form').on('submit', gearEvents.onCreateGear)
  $('#update-gear-form').on('submit', gearEvents.onUpdateGear)
  $('#delete-gear-form').on('submit', gearEvents.onDeleteGear)
})
