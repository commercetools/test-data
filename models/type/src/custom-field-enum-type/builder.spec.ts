/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomFieldEnumType, TCustomFieldEnumTypeGraphql } from './types';
import * as CustomFieldEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldEnumType, TCustomFieldEnumType>(
      'default',
      CustomFieldEnumType.random(),
      expect.objectContaining({
        name: 'Enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldEnumType, TCustomFieldEnumType>(
      'rest',
      CustomFieldEnumType.random(),
      expect.objectContaining({
        name: 'Enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldEnumType, TCustomFieldEnumTypeGraphql>(
      'graphql',
      CustomFieldEnumType.random(),
      expect.objectContaining({
        name: 'Enum',
        values: [],
        __typename: 'EnumType',
      })
    )
  );
});
