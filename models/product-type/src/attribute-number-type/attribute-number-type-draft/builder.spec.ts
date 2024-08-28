/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TAttributeNumberType,
  TAttributeNumberTypeDraft,
  TAttributeNumberTypeDraftGraphql,
} from '../types';
import * as AttributeNumberTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeNumberType, TAttributeNumberTypeDraft>(
      'default',
      AttributeNumberTypeDraft.random(),
      expect.objectContaining({
        name: 'number',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeNumberType,
      TAttributeNumberTypeDraftGraphql
    >(
      'graphql',
      AttributeNumberTypeDraft.random(),
      expect.objectContaining({
        number: {
          dummy: null,
        },
      })
    )
  );
});
