'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = 'white';

var SHADOW_WIDTH = CLOUD_WIDTH;
var SHADOW_HEIGHT = CLOUD_HEIGHT;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_SHIFT = 10;
var SHADOW_X = CLOUD_X + SHADOW_SHIFT;
var SHADOW_Y = CLOUD_Y + SHADOW_SHIFT;

var FONT_FAMILY = 'PT Mono';
var FONT_COLOR = 'black';
var FONT_SIZE = 16;
var FONT_SHIFT = 10;

var FIRST_STRING_X = 220;
var FIRST_STRING_Y = 40;
var SECOND_STRING_X = 210;
var SECOND_STRING_Y = 60;

var COLUMN_X = 210;
var COLUMN_Y = 250;
var COLUMN_WIDTH = 40;
var COLUMN_SHIFT = 50;
var COLUMN_MAX_HEIGHT = 150;
var MAIN_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';

var defineColor = function (ctx, color) {
  ctx.fillStyle = color;
};

var displayCard = function (ctx, corX, corY, width, height, color) {
  defineColor(ctx, color);
  ctx.fillRect(corX, corY, width, height);
};

var drawText = function (ctx, corX, corY, text, font, size) {
  defineColor(ctx, FONT_COLOR);
  ctx.font = size.toString() + 'px' + font;
  ctx.fillText(text, corX, corY);
};

var defineMaxValue = function (parameters) {
  var max = 0;
  for (var i = 0; i < parameters.length; i++) {
    if (max < parameters[i]) {
      max = parameters[i];
    }
  }

  return max;
};

var drawColumns = function (ctx, names, times) {
  var columnHeights = [];

  for (var j = 0; j < times.length; j++) {
    columnHeights[j] = times[j] * COLUMN_MAX_HEIGHT / defineMaxValue(times);
  }

  defineColor(ctx, MAIN_COLUMN_COLOR);
  for (var k = 0; k < times.length; k++) {
    if (names[k] === 'Вы') {
      defineColor(ctx, MAIN_COLUMN_COLOR);
    } else {
      var alpha = Math.random();
      defineColor(ctx, 'rgba(0, 0, 139, ' + alpha);
    }
    ctx.fillRect(COLUMN_X + COLUMN_SHIFT * k, COLUMN_Y, COLUMN_WIDTH, columnHeights[k] * -1);
    var resultX = COLUMN_X + COLUMN_SHIFT * k;
    var resultY = 250 - columnHeights[k] - FONT_SHIFT;
    var results = Math.round(times[k]);
    var name = names[k];

    var namesY = 270;

    drawText(ctx, resultX, resultY, results, FONT_FAMILY, FONT_SIZE);
    drawText(ctx, resultX, namesY, name, FONT_FAMILY, FONT_SIZE);
  }
};

window.renderStatistics = function (ctx, names, times) {
  displayCard(ctx, SHADOW_X, SHADOW_Y, SHADOW_WIDTH, SHADOW_HEIGHT, SHADOW_COLOR);
  displayCard(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  drawText(ctx, FIRST_STRING_X, FIRST_STRING_Y, 'Ура, вы победили!', FONT_FAMILY, FONT_SIZE);
  drawText(ctx, SECOND_STRING_X, SECOND_STRING_Y, 'Список результатов:', FONT_FAMILY, FONT_SIZE);
  drawColumns(ctx, names, times);
};
