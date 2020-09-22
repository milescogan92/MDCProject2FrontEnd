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
    url: config.apiUrl + '/gear/' + data.gear.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      gear: {
        rod: data.gear.rod,
        reel: data.gear.reel,
        tackle: data.gear.tackle
      }
    }
  })
}

const deleteGear = function (gearId) {
  return $.ajax({
    url: config.apiUrl + '/gear/' + gearId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  indexGear: indexGear,
  createGear: createGear,
  updateGear: updateGear,
  deleteGear: deleteGear
}
