/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeDefinition, TAttributeDefinitionGraphql } from './types';
import * as AttributeDefinition from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDefinition, TAttributeDefinition>(
      'default',
      AttributeDefinition.random(),
      expect.objectContaining({
        type: expect.objectContaining({ name: expect.any(String) }),
        name: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        isRequired: expect.any(Boolean),
        attributeConstraint: expect.any(String),
        inputTip: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        inputHint: expect.any(String),
        isSearchable: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDefinition, TAttributeDefinition>(
      'rest',
      AttributeDefinition.random(),
      expect.objectContaining({
        type: expect.objectContaining({ name: expect.any(String) }),
        name: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        isRequired: expect.any(Boolean),
        attributeConstraint: expect.any(String),
        inputTip: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        inputHint: expect.any(String),
        isSearchable: expect.any(Boolean),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDefinition, TAttributeDefinitionGraphql>(
      'graphql',
      AttributeDefinition.random(),
      expect.objectContaining({
        type: expect.objectContaining({
          name: expect.any(String),
          __typename: expect.any(String),
        }),
        name: expect.any(String),
        label: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        isRequired: expect.any(Boolean),
        attributeConstraint: expect.any(String),
        inputTip: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        inputHint: expect.any(String),
        isSearchable: expect.any(Boolean),
        __typename: 'AttributeDefinition',
      })
    )
  );
});
