/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import { TCustomFieldStringType, TCustomFieldStringTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomFieldStringType, TCustomFieldStringType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'String',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldStringType, TCustomFieldStringType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'String',
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomFieldStringType, TCustomFieldStringTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'String',
        __typename: 'StringType',
      })
    )
  );
});
