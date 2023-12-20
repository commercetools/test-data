/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomFieldTimeType, TCustomFieldTimeType } from './types';
import * as AttributeEnumType from './index';
import { TCustomFieldTimeTypeGraphql } from '../../dist/commercetools-test-data-type.cjs';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldTimeType, TCustomFieldTimeType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Time',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldTimeType, TCustomFieldTimeType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Time',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldTimeType, TCustomFieldTimeTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Time',
        __typename: 'TimeCustomFieldType',
      })
    )
  );
});
