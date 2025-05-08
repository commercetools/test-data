/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import {
  TProductDiscountValueRelativeDraft,
  TProductDiscountValueRelativeDraftGraphql,
} from '../types';
import * as ProductDiscountValueRelativeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueRelativeDraft,
      TProductDiscountValueRelativeDraft
    >(
      'default',
      ProductDiscountValueRelativeDraft.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueRelativeDraft,
      TProductDiscountValueRelativeDraft
    >(
      'rest',
      ProductDiscountValueRelativeDraft.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueRelativeDraft,
      TProductDiscountValueRelativeDraftGraphql
    >(
      'graphql',
      ProductDiscountValueRelativeDraft.random(),
      expect.objectContaining({
        relative: {
          permyriad: expect.any(Number),
        },
      })
    )
  );
});
