const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddLabs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is ', formData)
  api.postLabs(formData)
    .then(console.log('onShowLabs is working'))
    .then(ui.onAddLabsSuccess)
    .catch(ui.onAddLabsFailure)
}

const onShowLabs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is ' + formData)
  api.getLabs(formData)
    .then(console.log('onShowLabs is working'))
    .then(ui.onShowLabsSuccess)
    .catch(ui.onShowLabsFailure)
}

const onUpdateLabs = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is ', formData)
  console.log('id is ', id)
  api.patchLabs(formData, id)
    .then(console.log('onUpdateLabs is working'))
    .then(ui.onUpdateLabsSuccess)
    .catch(ui.onUpdateLabsFailure)
}

const onDestroyLabs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is ', formData)
  api.delLabs(formData)
    .then(console.log('onDestroyLabs is working'))
    .then(ui.onDestroyLabsSuccess)
    .catch(ui.onDestroyLabsFailure)
}

module.exports = {
  onShowLabs,
  onUpdateLabs,
  onAddLabs,
  onDestroyLabs
}
