/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TLocalizedStringDraft,
  TLocalizedStringDraftGraphql,
} from '../types';
import * as LocalizedStringDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocalizedStringDraft, TLocalizedStringDraft>(
      'default',
      LocalizedStringDraft.random(),
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
      LocalizedStringDraft.random(),
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
      LocalizedStringDraft.random(),
      expect.arrayContaining([
        expect.objectContaining({
          locale: 'de',
          value: expect.any(String),
        }),
        expect.not.objectContaining({
          locale: 'en',
          value: expect.any(String),
        }),
        expect.not.objectContaining({
          locale: 'fr',
          value: expect.any(String),
        }),
      ])
    )
  );

  it('should drop undefined locales', () => {
    const built = LocalizedStringDraft.random()
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
      LocalizedStringDraft.random().buildGraphql<TLocalizedStringDraftGraphql>();
    // @ts-expect-error
    expect(built.de).not.toBeDefined();
    // @ts-expect-error
    expect(built.en).not.toBeDefined();
    // @ts-expect-error
    expect(built.fr).not.toBeDefined();
  });
});
