/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCustomFieldLocalizedEnumValueGraphql,
  type TCustomFieldLocalizedEnumValue
} from './types';
import * as CustomFieldLocalizedEnumValue from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomFieldLocalizedEnumValue,
      TCustomFieldLocalizedEnumValue
    >(
      'default',
      CustomFieldLocalizedEnumValue.random(),
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
    ...createBuilderSpec<
      TCustomFieldLocalizedEnumValue,
      TCustomFieldLocalizedEnumValue
    >(
      'rest',
      CustomFieldLocalizedEnumValue.random(),
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
    ...createBuilderSpec<
      TCustomFieldLocalizedEnumValue,
      TCustomFieldLocalizedEnumValueGraphql
    >(
      'graphql',
      CustomFieldLocalizedEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        __typename: 'LocalizedEnumValue',
      })
    )
  );
});
