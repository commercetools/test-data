/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  type TCustomFieldEnumValue,
  TCustomFieldEnumValueGraphql,
} from './types';
import * as CustomFieldEnumValue from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldEnumValue, TCustomFieldEnumValue>(
      'default',
      CustomFieldEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldEnumValue, TCustomFieldEnumValue>(
      'rest',
      CustomFieldEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldEnumValue, TCustomFieldEnumValueGraphql>(
      'graphql',
      CustomFieldEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            // __typename: 'LocalizedString',
          }),
        ]),
        __typename: 'LocalizableEnumValueType',
      })
    )
  );
});
