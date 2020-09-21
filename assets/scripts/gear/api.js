'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexGear = function (data) {
  return $.ajax({
    url: config.apiUrl + '/gear',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createGear = function (data) {
  return $.ajax({
    url: config.apiUrl + '/gear',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  indexGear: indexGear,
  createGear: createGear
}
