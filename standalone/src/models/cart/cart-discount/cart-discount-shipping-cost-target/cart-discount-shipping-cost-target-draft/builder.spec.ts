/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCartDiscountShippingCostTargetDraft,
  TCartDiscountShippingCostTargetDraftGraphql,
} from '../types';
import * as CartDiscountShippingCostTargetDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTargetDraft,
      TCartDiscountShippingCostTargetDraft
    >(
      'default',
      CartDiscountShippingCostTargetDraft.random(),
      expect.objectContaining({
        type: 'shipping',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountShippingCostTargetDraft,
      TCartDiscountShippingCostTargetDraftGraphql
    >(
      'graphql',
      CartDiscountShippingCostTargetDraft.random(),
      expect.objectContaining({
        shipping: {},
      })
    )
  );
});
