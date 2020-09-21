'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onIndexGear = function (event) {
  event.preventDefault()
  api.indexGear()
    .then(ui.onIndexGearSuccess)
    .catch(ui.onIndexGearFailure)
}

const onCreateGear = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGear(data)
    .then(ui.onCreateGearSuccess)
    .catch(ui.onCreateGearFailure)
}

module.exports = {
  onIndexGear: onIndexGear,
  onCreateGear: onCreateGear
}
