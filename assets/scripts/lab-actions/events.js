const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// const update = console.log('update has run')
// const remove = console.log('delete has run')

const onAddLabs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData is ', formData)
  api.postLabs(formData)
    .then(ui.onAddLabsSuccess)
    .catch(ui.onAddLabsFailure)
}

// const onOnlyShowLabs = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   // console.log('formData is ' + formData)
//   api.getLabs(formData)
//     .then(ui.onOnlyShowLabsSuccess)
//     .catch(ui.onShowLabsFailure)
// }

const onShowLabs = (event, messageCheck) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData is ' + formData)
  api.getLabs(formData)
    // .then(ui.onShowLabsSuccess(messageCheck))
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
    .then(ui.onUpdateLabsSuccess)
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
    .then(reShowLabs => {
      onShowLabs(event, messageCheck)
    })
    // .then(ui.onDestroyLabsSuccess)
    .catch(ui.onDestroyLabsFailure)
}

module.exports = {
  onShowLabs,
  // onOnlyShowLabs,
  onUpdateLabs,
  onAddLabs,
  onDestroyLabs,
  onClearLabs
}
