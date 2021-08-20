$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $('.counter__up');
  var counterDown = $('.counter__down');
  var floorPath = $('.home__img path');


  // при наведении мышки на этаж - подсвечивается текущий этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удаление активного класса у этажей
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
  });

  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })
});