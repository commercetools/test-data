/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
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
        label: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        __typename: 'LocalizedEnumValue',
      })
    )
  );
});
