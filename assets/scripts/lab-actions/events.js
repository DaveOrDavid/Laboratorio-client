const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const appliance = require('../templates/appliance-listing.handlebars')

const onAddLabs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.postLabs(formData)
    .then(ui.onAddLabsSuccess)
    .catch(ui.onAddLabsFailure)
}

const onShowLabs = (event, messageCheck) => {
  event.preventDefault()
  // console.log('onShowLabs is working ', data.appliance.length)
  // if ($('content') === '') {
  //   $('#message').text('No items to show, click Create Appliance to add one')
  // } else {
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData is ' + formData)
  api.getLabs(formData)
    .then(data => {
      ui.onShowLabsSuccess(messageCheck, data)
    })
    .catch(ui.onShowLabsFailure)
}

const onUpdateLabs = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  const messageCheck = 'update'
  // console.log('formData is ', formData)
  // console.log('id is ', id)
  api.patchLabs(formData, id)
    .then(reShowLabs => {
      onShowLabs(event, messageCheck)
    })
    // .then(ui.onUpdateLabsSuccess)
    .catch(ui.onUpdateLabsFailure)
}

const onClearLabs = (event) => {
  event.preventDefault()
  ui.onClearLabsSuccess()
}

const onDestroyLabs = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const messageCheck = 'delete'
  api.delLabs(id)
    // .then(ui.onDestroyLabsSuccess)
    .then(reShowLabs => {
      onShowLabs(event, messageCheck)
    })
    .catch(ui.onDestroyLabsFailure)
}

module.exports = {
  onShowLabs,
  onUpdateLabs,
  onAddLabs,
  onDestroyLabs,
  onClearLabs
}
