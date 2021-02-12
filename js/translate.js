var LocaleManager = function (dictionary, options) {
  options = options || {};
  options.defaultLocale = LocaleManager.locales.ru;

  this.dictionary = dictionary;
  this.defaultLocale = options.defaultLocale;
  this.locale = this.defaultLocale;

  this.applyLocale = this.applyLocale.bind(this);
  this.toggle = this.toggle.bind(this);
};

LocaleManager.locales = { ru: 'ru', en: 'en' };

LocaleManager.prototype = {
  applyLocale(locale) {
    var i18nElements = document.querySelectorAll('[data-i18n]');
    var localization = this.dictionary[locale];

    i18nElements.forEach((element) => {
      var text = element.dataset.i18n
        .split('.')
        .reduce((acc, item) => acc[item], localization);

      element.innerHTML = text;
    });

    this.locale = locale;
  },
  toggle() {
    var nextLocale =
      this.locale === LocaleManager.locales.ru
        ? LocaleManager.locales.en
        : LocaleManager.locales.ru;

    this.applyLocale(nextLocale);
  },
};

var dictionary = {};

dictionary[LocaleManager.locales.ru] = {
  currentLanguage: 'Рус',
  switchLanguage: 'Eng',
  homePage: {
    content: 'Лорем ипсум',
  },
};

dictionary[LocaleManager.locales.en] = {
  currentLanguage: 'Eng',
  switchLanguage: 'Рус',
  homePage: {
    content: 'Lorem ipsum',
  },
};

var localeManager = new LocaleManager(dictionary);

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.switch')
    .addEventListener('click', localeManager.toggle);
});
