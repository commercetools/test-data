/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCustomFieldBooleanType,
  TCustomFieldBooleanTypeGraphql,
} from './types';
import * as CustomFieldBooleanType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldBooleanType, TCustomFieldBooleanType>(
      'default',
      CustomFieldBooleanType.random(),
      expect.objectContaining({
        name: 'Boolean',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldBooleanType, TCustomFieldBooleanType>(
      'rest',
      CustomFieldBooleanType.random(),
      expect.objectContaining({
        name: 'Boolean',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCustomFieldBooleanType,
      TCustomFieldBooleanTypeGraphql
    >(
      'graphql',
      CustomFieldBooleanType.random(),
      expect.objectContaining({
        name: 'Boolean',
        __typename: 'BooleanCustomFieldType',
      })
    )
  );
});
