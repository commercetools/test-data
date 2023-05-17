/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TAttributeTextType, TAttributeTextTypeGraphql } from './types';
import * as AttributeType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextType>(
      'default',
      AttributeType.random(),
      expect.objectContaining({
        name: 'text',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextType>(
      'rest',
      AttributeType.random(),
      expect.objectContaining({
        name: 'text',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextTypeGraphql>(
      'graphql',
      AttributeType.random(),
      expect.objectContaining({
        name: 'text',
        __typename: 'TextAttributeDefinitionType',
      })
    )
  );
});
