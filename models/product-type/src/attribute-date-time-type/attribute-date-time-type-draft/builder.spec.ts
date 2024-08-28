/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TAttributeDateTimeType,
  TAttributeDateTimeTypeDraft,
  TAttributeDateTimeTypeDraftGraphql,
} from '../types';
import * as AttributeDateTimeTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDateTimeType, TAttributeDateTimeTypeDraft>(
      'default',
      AttributeDateTimeTypeDraft.random(),
      expect.objectContaining({
        name: 'datetime',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAttributeDateTimeType,
      TAttributeDateTimeTypeDraftGraphql
    >(
      'graphql',
      AttributeDateTimeTypeDraft.random(),
      expect.objectContaining({
        datetime: {
          dummy: null,
        },
      })
    )
  );
});
