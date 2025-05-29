/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAttributeReferenceTypeDraft,
  TAttributeReferenceTypeDraftGraphql,
} from '../types';
import * as AttributeReferenceTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeReferenceTypeDraft,
      TAttributeReferenceTypeDraft
    >(
      'default',
      AttributeReferenceTypeDraft.random(),
      expect.objectContaining({
        referenceTypeId: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeReferenceTypeDraft,
      TAttributeReferenceTypeDraftGraphql
    >(
      'graphql',
      AttributeReferenceTypeDraft.random(),
      expect.objectContaining({
        reference: {
          referenceTypeId: expect.any(String),
        },
      })
    )
  );
});
