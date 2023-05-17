/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeBooleanType,
  TAttributeBooleanTypeDraft,
  TAttributeBooleanTypeDraftGraphql,
} from '../types';
import * as AttributeType from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeBooleanType, TAttributeBooleanTypeDraft>(
      'default',
      AttributeType.random(),
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
      AttributeType.random(),
      expect.objectContaining({
        boolean: {
          dummy: null,
        },
      })
    )
  );
});
