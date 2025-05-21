/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCartDiscountValueRelativeDraft,
  TCartDiscountValueRelativeDraftGraphql,
} from '../types';
import * as CartDiscountValueRelativeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueRelativeDraft,
      TCartDiscountValueRelativeDraft
    >(
      'default',
      CartDiscountValueRelativeDraft.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueRelativeDraft,
      TCartDiscountValueRelativeDraft
    >(
      'rest',
      CartDiscountValueRelativeDraft.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueRelativeDraft,
      TCartDiscountValueRelativeDraftGraphql
    >(
      'graphql',
      CartDiscountValueRelativeDraft.random(),
      expect.objectContaining({
        relative: {
          permyriad: expect.any(Number),
        },
      })
    )
  );
});
