$(document).ready(function () {

  let i = 1;

  $('#btn-add').on('click', (event) => {
    event.preventDefault();
    $('.input-increment').after($('.img-fil').html());
    i++;
  });

  $('#btn-min').on('click', (event) => {
    event.preventDefault();
    if (i > 1) {
      $(`.file-input div:nth-child(${i})`).remove();
      i--;
    }
  })
});