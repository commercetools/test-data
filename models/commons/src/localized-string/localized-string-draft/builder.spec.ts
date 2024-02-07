/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TLocalizedStringDraft,
  TLocalizedStringDraftGraphql,
} from '../types';
import * as LocalizedString from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocalizedStringDraft, TLocalizedStringDraft>(
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
    ...createBuilderSpec<TLocalizedStringDraft, TLocalizedStringDraft>(
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
    ...createBuilderSpec<TLocalizedStringDraft, TLocalizedStringDraftGraphql>(
      'graphql',
      LocalizedString.random(),
      expect.arrayContaining([
        expect.not.objectContaining({
          __typename: 'LocalizedString',
          // locale: 'de',
          // value: expect.any(String),
        }),
        expect.not.objectContaining({
          __typename: 'LocalizedString',
          // locale: 'en',
          // value: expect.any(String),
        }),
        expect.not.objectContaining({
          __typename: 'LocalizedString',
          // locale: 'fr',
          // value: expect.any(String),
        }),
      ])
    )
  );

  it('should drop undefined locales', () => {
    const built = LocalizedString.random()
      .en(undefined)
      .buildGraphql<TLocalizedStringDraftGraphql>();

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
      LocalizedString.random().buildGraphql<TLocalizedStringDraftGraphql>();
    // @ts-expect-error
    expect(built.de).not.toBeDefined();
    // @ts-expect-error
    expect(built.en).not.toBeDefined();
    // @ts-expect-error
    expect(built.fr).not.toBeDefined();
  });
});
