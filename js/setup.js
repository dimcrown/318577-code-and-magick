/* jshint browser: true */

'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

var WIZARD_EYESCOLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var WIZARD_COATCOLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getName = function () {
  var randName = Math.floor(Math.random() * WIZARD_NAMES.length);
  return (WIZARD_NAMES[randName]);
};

var getSurname = function () {
  var randSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  return (WIZARD_SURNAMES[randSurname]);
};

var getCoatColor = function () {
  var randCoat = Math.floor(Math.random() * WIZARD_COATCOLOR.length);
  return WIZARD_COATCOLOR[randCoat];
};

var getEyesColor = function () {
  var randEyes = Math.floor(Math.random() * WIZARD_EYESCOLOR.length);
  return WIZARD_EYESCOLOR[randEyes];
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  var wizardObj =
    {
      name: getName() + ' ' + getSurname(),
      coatColor: getCoatColor(),
      eyesColor: getEyesColor()
    };

  wizards[i] = wizardObj;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

/*
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i])); // appendChild вставка элементов внутрь fragment
}

similarListElement.appendChild(fragment);
*/

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i])); // appendChild вставка элементов внутрь fragment
  }
  return fragment;
};

similarListElement.appendChild(getFragment());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
