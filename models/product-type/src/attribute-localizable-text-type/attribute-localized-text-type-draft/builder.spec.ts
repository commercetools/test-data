/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeLocalizableTextTypeDraft,
  TAttributeLocalizableTextTypeDraftGraphql,
} from '../types';
import * as AttributeLocalizableTextTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextTypeDraft,
      TAttributeLocalizableTextTypeDraft
    >(
      'default',
      AttributeLocalizableTextTypeDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeLocalizableTextTypeDraft,
      TAttributeLocalizableTextTypeDraftGraphql
    >(
      'graphql',
      AttributeLocalizableTextTypeDraft.random(),
      expect.objectContaining({
        ltext: {
          dummy: null,
        },
      })
    )
  );
});
