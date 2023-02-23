/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttribute, TAttributeRest, TAttributeGraphql } from './types';
import * as Attribute from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttribute, TAttribute>(
      'default',
      Attribute.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
        attributeDefinition: expect.objectContaining({
          name: expect.any(String),
        }),
        referencedResource: expect.objectContaining({
          id: expect.any(String),
        }),
        referencedResourceSet: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttribute, TAttributeRest>(
      'rest',
      Attribute.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TAttribute, TAttributeGraphql>(
      'graphql',
      Attribute.random(),
      expect.objectContaining({
        name: expect.any(String),
        value: null,
        attributeDefinition: expect.objectContaining({
          name: expect.any(String),
          __typename: 'AttributeDefinition',
        }),
        referencedResource: expect.objectContaining({
          id: expect.any(String),
        }),
        referencedResourceSet: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        __typename: 'RawProductAttribute',
      })
    )
  );
});
