import type { TLocalizedString, TLocalizedStringGraphql } from './types';
import * as LocalizedString from '.';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = LocalizedString.random().build<TLocalizedString>();

    expect(built.de).toEqual(expect.any(String));
    expect(built.en).toEqual(expect.any(String));
    expect(built.fr).toEqual(expect.any(String));
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built =
      LocalizedString.random().buildGraphql<TLocalizedStringGraphql>();

    expect(built).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ])
    );
  });

  it('should transform all locales', () => {
    const built = LocalizedString.random().buildGraphql<TLocalizedString>();

    expect(built).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          locale: 'de',
        }),
        expect.objectContaining({
          locale: 'en',
        }),
        expect.objectContaining({
          locale: 'fr',
        }),
      ])
    );

    expect(built).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          value: expect.any(String),
        }),
        expect.objectContaining({
          value: expect.any(String),
        }),
        expect.objectContaining({
          value: expect.any(String),
        }),
      ])
    );
  });

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
