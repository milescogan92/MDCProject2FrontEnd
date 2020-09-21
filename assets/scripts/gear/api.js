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

const updateGear = function (data) {
  return $.ajax({
    url: config.apiUrl + 'gear/:id',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteGear = function (data) {
  return $.ajax({
    url: config.apiUrl + 'gear/:id',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  indexGear: indexGear,
  createGear: createGear,
  updateGear: updateGear,
  deleteGear: deleteGear
}
