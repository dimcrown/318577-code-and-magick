'use strict';

window.renderStatistics = function (ctx, names, times) {

// Тень под облаком (прямоугольником)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

// Облако (прямоугольник)
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

// Текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = getMaxOfArray();
  function getMaxOfArray() {
    return Math.max.apply(null, times);
  }

  var histogramWidth = 150;
  var step = histogramWidth / max;

  var barWidth = 40; // ширина столбца
  var indent = 50; // отступ между столбцами    420 / 50 + 40 =
  var initialX = 155; // расположение стобцов и текста по оси x
  var initialY = 240; // расположение стобцов и текста по оси y
  var numberForRandom = 8; // переменная для нахождения рандомного числа

  var evenlyNumber = (420 - (((2 * barWidth + indent) * 2) + indent)) / 3; // переменная для равномерного распределения стобцов на всю ширину

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + (indent + evenlyNumber) * i, initialY, barWidth, (times[i] * step) * (-1));
    } else {
      var randomNumber = Math.floor(Math.random() * numberForRandom);
      ctx.fillStyle = 'rgba(0, 0, 255, 0.' + (randomNumber + 2) + ')';
      ctx.fillRect(initialX + (indent + evenlyNumber) * i, initialY, barWidth, (times[i] * step) * (-1));
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], initialX + (indent + evenlyNumber) * i, initialY + 20); // текст имен под столбцами, 20 - это отступ
    ctx.fillText(times[i].toFixed(0), initialX + (indent + evenlyNumber) * i, initialY - (times[i] * step) - 10); // текст информации о времени над столбцами, 10 - это отступ
  }
};
