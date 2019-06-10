const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onShowLabs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.getLabs(formData)
    .then(console.log('onShowLabs is working'))
    .then(ui.onShowLabsSuccess)
    .catch(ui.onShowLabsFailure)
}
module.exports = {
  onShowLabs
}
