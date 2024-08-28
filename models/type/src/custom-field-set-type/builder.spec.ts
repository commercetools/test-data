/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomFieldSetTypeGraphql, TCustomFieldSetType } from './types';
import * as CustomFieldSetType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldSetType, TCustomFieldSetType>(
      'default',
      CustomFieldSetType.random(),
      expect.objectContaining({
        name: 'Set',
        elementType: {
          name: 'Boolean',
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldSetType, TCustomFieldSetType>(
      'rest',
      CustomFieldSetType.random(),
      expect.objectContaining({
        name: 'Set',
        elementType: {
          name: 'Boolean',
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldSetType, TCustomFieldSetTypeGraphql>(
      'graphql',
      CustomFieldSetType.random(),
      expect.objectContaining({
        name: 'Set',
        elementType: {
          name: 'Boolean',
          __typename: 'BooleanCustomFieldType',
        },
        __typename: 'SetCustomFieldType',
      })
    )
  );
});
