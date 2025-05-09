import type { TLocalizedString } from '../../types';
import ofSlugs from './of-slugs';

it('should build a localized string of slugs', () => {
  const built = ofSlugs().build<TLocalizedString>();
  expect(built).toEqual({
    en: expect.not.stringContaining(' '),
    de: expect.not.stringContaining(' '),
    fr: expect.not.stringContaining(' '),
  });
});
