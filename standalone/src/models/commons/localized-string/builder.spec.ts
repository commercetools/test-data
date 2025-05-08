/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type { TLocalizedString, TLocalizedStringGraphql } from './types';
import * as LocalizedString from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocalizedString, TLocalizedString>(
      'default',
      LocalizedString.random(),
      expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TLocalizedString, TLocalizedString>(
      'rest',
      LocalizedString.random(),
      expect.objectContaining({
        de: expect.any(String),
        en: expect.any(String),
        fr: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<TLocalizedString, TLocalizedStringGraphql>(
      'graphql',
      LocalizedString.random(),
      expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'de',
          value: expect.any(String),
        }),
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'en',
          value: expect.any(String),
        }),
        expect.objectContaining({
          __typename: 'LocalizedString',
          locale: 'fr',
          value: expect.any(String),
        }),
      ])
    )
  );

  it('should drop undefined locales', () => {
    const built = LocalizedString.random()
      .en(undefined)
      .buildGraphql<TLocalizedStringGraphql>();

    expect(built).toEqual(
      expect.not.arrayContaining([
        expect.objectContaining({
          locale: 'en',
        }),
      ])
    );
  });

  it('should remove all language keys', () => {
    const built =
      LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();
    // @ts-expect-error
    expect(built.de).not.toBeDefined();
    // @ts-expect-error
    expect(built.en).not.toBeDefined();
    // @ts-expect-error
    expect(built.fr).not.toBeDefined();
  });
});
