import { LocalizedString } from '@/models/commons';
import { toLocalizedField, resolveGraphqlDefaultLocaleValue } from './helpers';
import { TLocalizedStringGraphql } from './types';

describe('LocalizedString helpers', () => {
  describe('toLocalizedField', () => {
    it('should return null if no value is provided', () => {
      const result = toLocalizedField(null);
      expect(result).toBeNull();
    });

    it('should return a localized field if value is provided', () => {
      const mockValue = LocalizedString.random().en('Hello').de('Hallo');
      const result = toLocalizedField(mockValue);

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: 'Hello',
            __typename: 'LocalizedString',
          }),
          expect.objectContaining({
            locale: 'de',
            value: 'Hallo',
            __typename: 'LocalizedString',
          }),
        ])
      );
    });
  });

  describe('resolveGraphqlDefaultLocaleValue', () => {
    it('should return null if no locales are provided', () => {
      const result = resolveGraphqlDefaultLocaleValue(null);
      expect(result).toBeNull();
    });

    it('should return null if locales array is empty', () => {
      const result = resolveGraphqlDefaultLocaleValue([]);
      expect(result).toBeNull();
    });

    it('should return the value of the default locale if it exists', () => {
      const mockLocales: TLocalizedStringGraphql = [
        { locale: 'en', value: 'Hello', __typename: 'LocalizedString' },
        { locale: 'de', value: 'Hallo', __typename: 'LocalizedString' },
      ];
      const result = resolveGraphqlDefaultLocaleValue(mockLocales);
      expect(result).toBe('Hello');
    });

    it('should return the value of the first locale if default locale does not exist', () => {
      const mockLocales: TLocalizedStringGraphql = [
        { locale: 'fr', value: 'Bonjour', __typename: 'LocalizedString' },
        { locale: 'de', value: 'Hallo', __typename: 'LocalizedString' },
      ];
      const result = resolveGraphqlDefaultLocaleValue(mockLocales);
      expect(result).toBe('Bonjour');
    });
  });
});
