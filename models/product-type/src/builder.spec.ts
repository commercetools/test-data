/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductType, TProductTypeGraphql } from './types';
import * as ProductType from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductType, TProductType>(
      'default',
      ProductType.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
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
    ...createBuilderSpec<TProductType, TProductType>(
      'rest',
      ProductType.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
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
    ...createBuilderSpec<TProductType, TProductTypeGraphql>(
      'graphql',
      ProductType.random(),
      expect.objectContaining({
        __typename: 'ProductTypeDefinition',
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        name: expect.any(String),
        description: expect.any(String),
        attributeDefinitions: expect.objectContaining({
          __typename: 'AttributeDefinitionResult',
        }),
      })
    )
  );
});
