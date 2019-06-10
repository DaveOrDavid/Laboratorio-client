'use strict'

const showApplianceTemplate = require('../templates/appliance-listing.handlebars')

const onShowLabsSuccess = responseData => {
  console.log('show all success', responseData)
  const showApplianceHtml = showApplianceTemplate({ appliance: responseData.appliance })
  $('#message').text('Show labs success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('.content').html(showApplianceHtml)
}

const onShowLabsFailure = responseData => {
  console.log('show all failure', responseData)
  $('#message').text('Show labs failure')
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
}
// below examples from Eron's class

// const getBooksSuccess = (data) => {
//   console.log(data)
//   const showBooksHtml = showBooksTemplate({ books: data.books })
//   $('.content').html(showBooksHtml)
// }
//
// const clearBooks = () => {
//   $('.content').empty()
// }
//
// const failure = (error) => {
//   console.error(error)
// }

module.exports = {
  onShowLabsSuccess,
  onShowLabsFailure
}
