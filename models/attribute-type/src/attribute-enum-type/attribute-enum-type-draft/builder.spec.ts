/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeEnumType,
  TAttributeEnumTypeDraft,
  TAttributeEnumTypeDraftGraphql,
} from '../types';
import * as AttributeType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraft>(
      'default',
      AttributeType.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraftGraphql>(
      'graphql',
      AttributeType.random(),
      expect.objectContaining({
        enum: [],
      })
    )
  );
});
