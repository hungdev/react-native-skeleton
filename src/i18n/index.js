import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
// guide: https://medium.com/@nicolas.kovacs/react-native-localize-and-i18n-js-117f09428017
import en from "./locales/en";
import vi from "./locales/vi";
import pl from "./locales/pl";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

export function getLanguageTag() {
  if (locales && Array.isArray(locales)) {
    return locales[0].languageTag;
  }
  return null;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
  pl
};

export const translate = (value) => I18n.t(value)

export default I18n;
