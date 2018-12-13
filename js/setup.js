'use strict';

var similarWizardTemplate = document.querySelector('#similar-wizard-template').cloneNode(true);

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var overlay = document.querySelector('.setup');

var openOverlay = function () {
  overlay.classList.remove('hidden');
};

var closeOverlay = function () {
  overlay.classList.add('hidden');
};

var generateRandomNumber = function (maxValue) {
  return Math.floor((Math.random() * maxValue));
};

var generateWizard = function (names, surnames, coatColors, eyesColors) {
  return {
    name: names[generateRandomNumber(names.length)],
    surname: surnames[generateRandomNumber(surnames.length)],
    coatColor: coatColors[generateRandomNumber(coatColors.length)],
    eyesColor: eyesColors[generateRandomNumber(eyesColors.length)]
  };
};

document.querySelector('.setup-similar').classList.remove('hidden');

var adjustSimilarWizard = function () {
  var generatedWizard = generateWizard(wizardNames, wizardSurnames, wizardCoatColors, wizardEyesColors);
  var fragment = document.createDocumentFragment();
  var clone = similarWizardTemplate.content.querySelector('div').cloneNode(true);

  clone.querySelector('.setup-similar-label').innerHTML = generatedWizard.name + ' ' + generatedWizard.surname;
  clone.querySelector('.wizard-coat').style.fill = generatedWizard.coatColor;
  clone.querySelector('.wizard-eyes').style.fill = generatedWizard.eyesColor;
  fragment.appendChild(clone);

  document.querySelector('.setup-similar-list').appendChild(fragment);
};

for (var i = 0; i < 4; i++) {
  adjustSimilarWizard();
}

closeOverlay();
openOverlay();
