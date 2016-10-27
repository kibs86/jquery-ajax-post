'use strict';

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
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

const onCreateSuccess = function (data) {
  console.log(data.book);
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess
};
