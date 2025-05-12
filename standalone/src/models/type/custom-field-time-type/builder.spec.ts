/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { TCustomFieldTimeType, TCustomFieldTimeTypeGraphql } from './types';
import * as AttributeEnumType from './index';

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
        __typename: 'TimeType',
      })
    )
  );
});
