/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeEnumType,
  TAttributeEnumTypeDraft,
  TAttributeEnumTypeDraftGraphql,
} from '../types';
import * as AttributeEnumTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraft>(
      'default',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        name: 'enum',
        values: [],
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeEnumType, TAttributeEnumTypeDraftGraphql>(
      'graphql',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        enum: [],
      })
    )
  );
});
