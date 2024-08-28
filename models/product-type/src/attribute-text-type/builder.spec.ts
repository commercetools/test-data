/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TAttributeTextType, TAttributeTextTypeGraphql } from './types';
import * as AttributeEnumType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextType>(
      'default',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'text',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextType>(
      'rest',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'text',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextTypeGraphql>(
      'graphql',
      AttributeEnumType.random(),
      expect.objectContaining({
        name: 'text',
        __typename: 'TextAttributeDefinitionType',
      })
    )
  );
});
