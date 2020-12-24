import React from 'react';
import i18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
import { memoize } from 'lodash';
import { I18nManager } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const locales = RNLocalize.getLocales();

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./locales/en.json'),
  vi: () => require('./locales/vi.json'),
  pl: () => require('./locales/pl.json'),
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const setI18nConfig = () => {
  const language = useSelector(store => store.auth.language);
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [language || languageTag]: translationGetters[language || languageTag]() };
  i18n.locale = language || languageTag;
};