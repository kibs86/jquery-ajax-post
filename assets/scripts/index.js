'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const bookEvents = require('./books/events');

// On document ready
$(() => {
  $('.books').on('submit', bookEvents.onGetBooks)
  $('.delete-book').on('submit', bookEvents.onDeleteBook)
  $('.update-book').on('submit', bookEvents.onUpdateBook);
  $('.create-book').on('submit', bookEvents.onCreateBook);
});
