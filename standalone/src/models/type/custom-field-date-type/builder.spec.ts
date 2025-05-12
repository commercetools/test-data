/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { TCustomFieldDateType, TCustomFieldDateTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldDateType, TCustomFieldDateType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Date',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldDateType, TCustomFieldDateType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Date',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldDateType, TCustomFieldDateTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'Date',
        __typename: 'DateType',
      })
    )
  );
});
