

$(document).ready(() => {
  console.log('Week 4 作業v2.1');

  $('.header-logos__btn').click(function (e) {
    e.preventDefault();
    $('.header-menu').toggleClass('show-menu')
  })
});