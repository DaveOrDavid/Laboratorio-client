const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const appliance = require('../templates/appliance-listing.handlebars')

const onAddTools = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.postTools(formData)
    .then(ui.onAddToolsSuccess)
    .catch(ui.onAddToolsFailure)
}

const onShowTools = (event, messageCheck) => {
  event.preventDefault()
  // console.log('onShowLabs is working ', data.appliance.length)
  // if ($('content') === '') {
  //   $('#message').text('No items to show, click Create Appliance to add one')
  // } else {
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData is ' + formData)
  api.getTools(formData)
    .then(data => {
      ui.onShowToolsSuccess(messageCheck, data)
    })
    .catch(ui.onShowToolsFailure)
}

const onUpdateTools = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  const messageCheck = 'update'
  // console.log('formData is ', formData)
  // console.log('id is ', id)
  api.patchTools(formData, id)
    .then(reShowTools => {
      onShowTools(event, messageCheck)
    })
    // .then(ui.onUpdateLabsSuccess)
    .catch(ui.onUpdateToolsFailure)
}

const onClearTools = (event) => {
  event.preventDefault()
  ui.onClearToolsSuccess()
}

const onDestroyTools = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const messageCheck = 'delete'
  api.delTools(id)
    // .then(ui.onDestroyLabsSuccess)
    .then(reShowLabs => {
      onShowTools(event, messageCheck)
    })
    .catch(ui.onDestroyToolsFailure)
}

module.exports = {
  onShowTools,
  onUpdateTools,
  onAddTools,
  onDestroyTools,
  onClearTools
}
