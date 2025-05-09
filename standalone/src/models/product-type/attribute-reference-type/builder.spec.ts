/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import {
  TAttributeReferenceType,
  TAttributeReferenceTypeGraphql,
} from './types';
import * as AttributeReferenceType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeReferenceType, TAttributeReferenceType>(
      'default',
      AttributeReferenceType.random(),
      expect.objectContaining({
        name: 'reference',
        referenceTypeId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeReferenceType, TAttributeReferenceType>(
      'rest',
      AttributeReferenceType.random(),
      expect.objectContaining({
        name: 'reference',
        referenceTypeId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeReferenceType,
      TAttributeReferenceTypeGraphql
    >(
      'graphql',
      AttributeReferenceType.random(),
      expect.objectContaining({
        name: 'reference',
        referenceTypeId: expect.any(String),
        __typename: 'ReferenceAttributeDefinitionType',
      })
    )
  );
});
