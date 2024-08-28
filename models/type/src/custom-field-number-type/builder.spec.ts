/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomFieldNumberType, TCustomFieldNumberTypeGraphql } from './types';
import * as CustomFieldNumberType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldNumberType, TCustomFieldNumberType>(
      'default',
      CustomFieldNumberType.random(),
      expect.objectContaining({
        name: 'Number',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldNumberType, TCustomFieldNumberType>(
      'rest',
      CustomFieldNumberType.random(),
      expect.objectContaining({
        name: 'Number',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldNumberType, TCustomFieldNumberTypeGraphql>(
      'graphql',
      CustomFieldNumberType.random(),
      expect.objectContaining({
        name: 'Number',
        __typename: 'NumberCustomFieldType',
      })
    )
  );
});
