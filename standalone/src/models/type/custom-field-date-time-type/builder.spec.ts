/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import {
  TCustomFieldDateTimeType,
  TCustomFieldDateTimeTypeGraphql,
} from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldDateTimeType, TCustomFieldDateTimeType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'DateTime',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldDateTimeType, TCustomFieldDateTimeType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'DateTime',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldDateTimeType,
      TCustomFieldDateTimeTypeGraphql
    >(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'DateTime',
        __typename: 'DateTimeType',
      })
    )
  );
});
