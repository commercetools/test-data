/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAttributeTimeType, TAttributeTimeTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeTimeType, TAttributeTimeType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'time',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTimeType, TAttributeTimeType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'time',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTimeType, TAttributeTimeTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'time',
        __typename: 'TimeAttributeDefinitionType',
      })
    )
  );
});
