/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TProductDiscountValueAbsoluteDraft,
  TProductDiscountValueAbsoluteDraftGraphql,
} from '../types';
import * as ProductDiscountValueAbsoluteDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsoluteDraft,
      TProductDiscountValueAbsoluteDraft
    >(
      'default',
      ProductDiscountValueAbsoluteDraft.random(),
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
      ProductDiscountValueAbsoluteDraft.random(),
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
      ProductDiscountValueAbsoluteDraft.random(),
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
