/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeDefinitionDraft,
  TAttributeDefinitionDraftGraphql,
} from '../types';
import * as AttributeDefinitionDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDefinitionDraft, TAttributeDefinitionDraft>(
      'default',
      AttributeDefinitionDraft.random(),
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
    ...createBuilderSpec<TAttributeDefinitionDraft, TAttributeDefinitionDraft>(
      'rest',
      AttributeDefinitionDraft.random(),
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
    ...createBuilderSpec<
      TAttributeDefinitionDraft,
      TAttributeDefinitionDraftGraphql
    >(
      'graphql',
      AttributeDefinitionDraft.random(),
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
        __typename: 'AttributeDefinitionDraft',
      })
    )
  );
});
