/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAttributeDateType, TAttributeDateTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDateType, TAttributeDateType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'date',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDateType, TAttributeDateType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'date',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDateType, TAttributeDateTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'date',
        __typename: 'DateAttributeDefinitionType',
      })
    )
  );
});
