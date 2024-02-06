/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TFieldDefinition, TFieldDefinitionGraphql } from './types';
import * as FieldDefinition from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TFieldDefinition, TFieldDefinition>(
      'default',
      FieldDefinition.random(),
      expect.objectContaining({
        type: expect.objectContaining({ name: expect.any(String) }),
        name: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        required: expect.any(Boolean),
        inputHint: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TFieldDefinition, TFieldDefinition>(
      'rest',
      FieldDefinition.random(),
      expect.objectContaining({
        type: expect.objectContaining({ name: expect.any(String) }),
        name: expect.any(String),
        label: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        required: expect.any(Boolean),
        inputHint: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TFieldDefinition, TFieldDefinitionGraphql>(
      'graphql',
      FieldDefinition.random(),
      expect.objectContaining({
        type: expect.objectContaining({
          name: expect.any(String),
          __typename: expect.any(String),
        }),
        name: expect.any(String),
        label: expect.arrayContaining([
          expect.objectContaining({
            // __typename: 'LocalizedString',
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        required: expect.any(Boolean),
        inputHint: expect.any(String),
        __typename: 'FieldDefinition',
      })
    )
  );
});
