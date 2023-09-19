/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { type TAttributeLocalizedEnumValue } from './types';
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

  //There are no graphql tests at this time
});
