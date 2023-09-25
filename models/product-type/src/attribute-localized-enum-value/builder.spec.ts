/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  type TAttributeLocalizedEnumValue,
  TAttributeLocalizedEnumValueGraphql,
} from './types';
import * as AttributeLocalizedEnumValue from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizedEnumValue,
      TAttributeLocalizedEnumValue
    >(
      'default',
      AttributeLocalizedEnumValue.random(),
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
      TAttributeLocalizedEnumValue,
      TAttributeLocalizedEnumValue
    >(
      'rest',
      AttributeLocalizedEnumValue.random(),
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
      TAttributeLocalizedEnumValue,
      TAttributeLocalizedEnumValueGraphql
    >(
      'graphql',
      AttributeLocalizedEnumValue.random(),
      expect.objectContaining({
        key: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        __typename: 'LocalizableEnumValueType',
      })
    )
  );
});
