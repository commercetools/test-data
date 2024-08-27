/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeDateTimeType, TAttributeDateTimeTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDateTimeType, TAttributeDateTimeType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'datetime',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDateTimeType, TAttributeDateTimeType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'datetime',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDateTimeType, TAttributeDateTimeTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'datetime',
        __typename: 'DateTimeAttributeDefinitionType',
      })
    )
  );
});
