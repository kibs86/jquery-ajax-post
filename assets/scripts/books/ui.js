'use strict';

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
    $('#book-content').append(`<br> ${data.book.title}`);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');
};

const onUpdateSuccess = function () {
  console.log('Book was successfully Updated.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
};
