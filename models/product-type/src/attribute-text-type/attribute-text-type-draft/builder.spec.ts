/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TAttributeTextType,
  TAttributeTextTypeDraft,
  TAttributeTextTypeDraftGraphql,
} from '../types';
import * as AttributeTextTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextTypeDraft>(
      'default',
      AttributeTextTypeDraft.random(),
      expect.objectContaining({
        name: 'text',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextTypeDraftGraphql>(
      'graphql',
      AttributeTextTypeDraft.random(),
      expect.objectContaining({
        text: {
          dummy: null,
        },
      })
    )
  );
});
