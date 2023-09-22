/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeSetType,
  TAttributeSetTypeDraft,
  TAttributeSetTypeDraftGraphql,
} from '../types';
import * as AttributeEnumTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeSetType, TAttributeSetTypeDraft>(
      'default',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        name: 'set',
        elementType: {
          name: 'boolean',
        },
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeSetType, TAttributeSetTypeDraftGraphql>(
      'graphql',
      AttributeEnumTypeDraft.random(),
      expect.objectContaining({
        elementType: {
          boolean: {
            dummy: null,
          },
        },
      })
    )
  );
});
