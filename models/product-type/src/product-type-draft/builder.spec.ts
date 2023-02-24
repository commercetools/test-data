/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductTypeDraft, TProductTypeDraftGraphql } from '../types';
import * as ProductTypeDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductTypeDraft, TProductTypeDraft>(
      'default',
      ProductTypeDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            attributeConstraint: expect.any(String),
          }),
        ]),
        attributes: expect.arrayContaining([
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
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductTypeDraft, TProductTypeDraft>(
      'rest',
      ProductTypeDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        attributes: expect.arrayContaining([
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
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductTypeDraft, TProductTypeDraftGraphql>(
      'graphql',
      ProductTypeDraft.random(),
      expect.objectContaining({
        __typename: 'ProductTypeDraft',
        key: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'AttributeDefinitionDraft',
          }),
        ]),
      })
    )
  );
});
