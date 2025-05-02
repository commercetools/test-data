/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeSetTypeDraft,
  TAttributeSetTypeDraftGraphql,
} from '../types';
import * as AttributeEnumTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeSetTypeDraft, TAttributeSetTypeDraft>(
      'default',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        elementType: {
          name: 'boolean',
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeSetTypeDraft, TAttributeSetTypeDraftGraphql>(
      'graphql',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        set: {
          elementType: {
            dummy: null,
          },
        },
      })
    )
  );
});
