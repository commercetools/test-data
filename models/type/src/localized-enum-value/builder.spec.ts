/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TLocalizedEnumValue, TLocalizedEnumValueGraphql } from './types';
import { LocalizedEnumValue } from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLocalizedEnumValue, TLocalizedEnumValue>(
      'default',
      LocalizedEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLocalizedEnumValue, TLocalizedEnumValueGraphql>(
      'graphql',
      LocalizedEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        __typename: 'LocalizedEnumValue',
      })
    )
  );

  it('should allow customization', () => {
    const key = 'test-key';
    const label = 'test label';
    const locale = 'en';

    const localizedEnumValueMock = LocalizedEnumValue.random()
      .key(key)
      .label(label)
      .buildGraphql();

    expect(localizedEnumValueMock).toEqual(
      expect.objectContaining({
        key,
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale,
            value: label,
          }),
        ]),
        __typename: 'LocalizedEnumValue',
      })
    );
  });
});
