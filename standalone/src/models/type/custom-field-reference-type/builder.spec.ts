/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TCustomFieldReferenceType,
  TCustomFieldReferenceTypeGraphql,
} from './types';
import * as CustomFieldReferenceType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldReferenceType, TCustomFieldReferenceType>(
      'default',
      CustomFieldReferenceType.random(),
      expect.objectContaining({
        name: 'Reference',
        referenceTypeId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldReferenceType, TCustomFieldReferenceType>(
      'rest',
      CustomFieldReferenceType.random(),
      expect.objectContaining({
        name: 'Reference',
        referenceTypeId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldReferenceType,
      TCustomFieldReferenceTypeGraphql
    >(
      'graphql',
      CustomFieldReferenceType.random(),
      expect.objectContaining({
        name: 'Reference',
        referenceTypeId: expect.any(String),
        __typename: 'ReferenceType',
      })
    )
  );
});
