/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAttributeDateType,
  TAttributeDateTypeDraft,
  TAttributeDateTypeDraftGraphql,
} from '../types';
import * as AttributeDateTypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TAttributeDateType, TAttributeDateTypeDraft>(
      'default',
      AttributeDateTypeDraft.random(),
      expect.objectContaining({
        name: 'date',
      })
    )
  );

  it(
    ...createBuilderSpec<TAttributeDateType, TAttributeDateTypeDraftGraphql>(
      'graphql',
      AttributeDateTypeDraft.random(),
      expect.objectContaining({
        date: {
          dummy: null,
        },
      })
    )
  );
});
