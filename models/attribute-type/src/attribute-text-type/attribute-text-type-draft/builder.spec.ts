/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeTextType,
  TAttributeTextTypeDraft,
  TAttributeTextTypeDraftGraphql,
} from '../types';
import * as AttributeType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextTypeDraft>(
      'default',
      AttributeType.random(),
      expect.objectContaining({
        name: 'text',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTextType, TAttributeTextTypeDraftGraphql>(
      'graphql',
      AttributeType.random(),
      expect.objectContaining({
        text: {
          dummy: null,
        },
      })
    )
  );
});
