'use strict';

class LocaleManager {
  static locales = { ru: 'ru', en: 'en' };

  constructor(defaultLocale = LocaleManager.locales.ru) {
    this.defaultLocale = defaultLocale;
    this.locale = this.defaultLocale;
  }

  toggle = () => {
    const nextLocale =
      this.locale === LocaleManager.locales.ru
        ? LocaleManager.locales.en
        : LocaleManager.locales.ru;
    const i18nElements = document.querySelectorAll('[data-i18n]');

    i18nElements.forEach((element) => {
      const currentText = element.innerHTML;
      const nextText = element.dataset[nextLocale];
      // console.log(currentText, nextText, this.locale, nextLocale);
      element.setAttribute(`data-${this.locale}`, currentText);

      element.innerHTML = nextText;
    });

    this.locale = nextLocale;
  };
}

const locale = new LocaleManager();

document.querySelector('.switch').addEventListener('click', locale.toggle);
