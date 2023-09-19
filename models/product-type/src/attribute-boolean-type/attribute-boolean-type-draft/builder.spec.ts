/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeBooleanType,
  TAttributeBooleanTypeDraft,
  TAttributeBooleanTypeDraftGraphql,
} from '../types';
import * as AttributeBooleanTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeBooleanType, TAttributeBooleanTypeDraft>(
      'default',
      AttributeBooleanTypeDraft.random(),
      expect.objectContaining({
        name: 'boolean',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeBooleanType,
      TAttributeBooleanTypeDraftGraphql
    >(
      'graphql',
      AttributeBooleanTypeDraft.random(),
      expect.objectContaining({
        boolean: {
          dummy: null,
        },
      })
    )
  );
});
