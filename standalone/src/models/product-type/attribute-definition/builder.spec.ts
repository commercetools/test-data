/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
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
        label: expect.any(String),
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        isRequired: expect.any(Boolean),
        attributeConstraint: expect.any(String),
        inputTip: expect.any(String),
        inputTipAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        inputHint: expect.any(String),
        isSearchable: expect.any(Boolean),
        __typename: 'AttributeDefinition',
      })
    )
  );
});
