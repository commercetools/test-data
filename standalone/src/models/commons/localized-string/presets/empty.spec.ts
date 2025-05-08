import type { TLocalizedString } from '../types';
import empty from './empty';

it('should set all locales to undefined', () => {
  const emptyLocalizedString = empty().build<TLocalizedString>();
  expect(emptyLocalizedString).toEqual({
    en: undefined,
    de: undefined,
    fr: undefined,
  });
});
