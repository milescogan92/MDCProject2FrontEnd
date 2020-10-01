'use strict'

const store = require('../store.js')

const onIndexGearSuccess = function (response) {
  $('#message-area').text('Gear Index successful, see gear below!')
  // store.user = response.user
  const index = response.gear
  let sendhtml = '<ol>'
  index.forEach(data => {
    sendhtml += `<li id=${data._id}>
    Rod: ${data.rod} \n
    Reel: ${data.reel} \n
    Tackle: ${data.tackle} \n
    ID: ${data._id} </li>`
    return sendhtml
  })
  sendhtml += '</ol>'
  $('#gear-index').html(sendhtml)
  $('#gear-index').show()
}

const onIndexGearFailure = function () {
  $('#message-area').text('Gear Index failed, try again!')
}

const onCreateGearSuccess = function () {
  $('#message-area').text('New Gear Setup created successfully!')
  $('#create-gear-form').trigger('reset')
}

const onCreateGearFailure = function () {
  $('#message-area').text('Gear Setup NOT created, try again.')
}

const onUpdateGearSuccess = function () {
  $('#message-area').text('Gear update successful, hooray!')
  $('#update-gear-form').trigger('reset')
}

const onUpdateGearFailure = function () {
  $('#message-area').text('Gear Update failed, try again.')
}

const onDeleteGearSuccess = function () {
  $('#message-area').text('Gear delete successful, goodbye gear!')
  $('#delete-gear-form').trigger('reset')
}

const onDeleteGearFailure = function () {
  $('#message-area').text('Gear delete failed, try deletion again.')
}

module.exports = {
  onIndexGearSuccess: onIndexGearSuccess,
  onIndexGearFailure: onIndexGearFailure,
  onCreateGearSuccess: onCreateGearSuccess,
  onCreateGearFailure: onCreateGearFailure,
  onUpdateGearSuccess: onUpdateGearSuccess,
  onUpdateGearFailure: onUpdateGearFailure,
  onDeleteGearSuccess: onDeleteGearSuccess,
  onDeleteGearFailure: onDeleteGearFailure

}
