import { translate } from 'i18n'

export const REQUIRED = ({
  required: {
    value: true,
    message: translate('required')
  }
});
export const EMAIL = ({
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: translate('email.invalid')
  }
});