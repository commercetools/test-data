/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountTotalPriceTargetDraft,
  TCartDiscountTotalPriceTargetDraftGraphql,
} from '../types';
import * as CartDiscountTotalPriceTargetDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountTotalPriceTargetDraft,
      TCartDiscountTotalPriceTargetDraft
    >(
      'default',
      CartDiscountTotalPriceTargetDraft.random(),
      expect.objectContaining({
        type: 'totalPrice',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountTotalPriceTargetDraft,
      TCartDiscountTotalPriceTargetDraft
    >(
      'rest',
      CartDiscountTotalPriceTargetDraft.random(),
      expect.objectContaining({
        type: 'totalPrice',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountTotalPriceTargetDraft,
      TCartDiscountTotalPriceTargetDraftGraphql
    >(
      'graphql',
      CartDiscountTotalPriceTargetDraft.random(),
      expect.objectContaining({
        totalPrice: {},
      })
    )
  );
});
