/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TProductDiscountValueAbsoluteDraft,
  TProductDiscountValueAbsoluteDraftGraphql,
} from './types';
import * as ProductDiscountValueAbsolute from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsoluteDraft,
      TProductDiscountValueAbsoluteDraft
    >(
      'default',
      ProductDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsoluteDraft,
      TProductDiscountValueAbsoluteDraft
    >(
      'rest',
      ProductDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsoluteDraft,
      TProductDiscountValueAbsoluteDraftGraphql
    >(
      'graphql',
      ProductDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
          }),
        ]),
        __typename: 'ProductDiscountValueAbsoluteDraft',
      })
    )
  );
});
