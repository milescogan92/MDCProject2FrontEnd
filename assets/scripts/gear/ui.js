'use strict'

const store = require('../store.js')

const onIndexGearSuccess = function (response) {
  $('#message-area').text('Gear Index successful, see gear below!')
  store.user = response.user
  console.log(response)
  const index = response.gear
  let sendhtml = '<ol>'
  index.forEach(data => {
    sendhtml += `<li id=${data._id}>
    Rod: ${data.rod} \n
    Reel: ${data.reel} \n
    Tackle: ${data.tackle} </li>`
    return sendhtml
  })
  sendhtml += '</ol>'
  console.log(index)
  $('#gear-index').html(sendhtml)
}

const onIndexGearFailure = function () {
  $('#message-area').text('Gear Index failed, try again!')
}

const onCreateGearSuccess = function () {
  $('#message-area').text('New Gear Setup created successfully!')
}

const onCreateGearFailure = function () {
  $('#message-area').text('Gear Setup NOT created, try again.')
}

module.exports = {
  onIndexGearSuccess: onIndexGearSuccess,
  onIndexGearFailure: onIndexGearFailure,
  onCreateGearSuccess: onCreateGearSuccess,
  onCreateGearFailure: onCreateGearFailure
}
