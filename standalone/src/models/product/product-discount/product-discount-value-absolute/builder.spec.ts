/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TProductDiscountValueAbsolute,
  TProductDiscountValueAbsoluteGraphql,
} from './types';
import * as ProductDiscountValueAbsolute from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsolute,
      TProductDiscountValueAbsolute
    >(
      'default',
      ProductDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsolute,
      TProductDiscountValueAbsolute
    >(
      'rest',
      ProductDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueAbsolute,
      TProductDiscountValueAbsoluteGraphql
    >(
      'graphql',
      ProductDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
        __typename: 'AbsoluteDiscountValue',
      })
    )
  );
});
