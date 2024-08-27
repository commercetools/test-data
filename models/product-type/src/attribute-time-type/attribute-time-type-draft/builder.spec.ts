/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TAttributeTimeType,
  TAttributeTimeTypeDraft,
  TAttributeTimeTypeDraftGraphql,
} from '../types';
import * as AttributeTimeTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeTimeType, TAttributeTimeTypeDraft>(
      'default',
      AttributeTimeTypeDraft.random(),
      expect.objectContaining({
        name: 'time',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeTimeType, TAttributeTimeTypeDraftGraphql>(
      'graphql',
      AttributeTimeTypeDraft.random(),
      expect.objectContaining({
        time: {
          dummy: null,
        },
      })
    )
  );
});
