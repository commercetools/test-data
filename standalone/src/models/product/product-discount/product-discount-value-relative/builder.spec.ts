/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TProductDiscountValueRelative,
  TProductDiscountValueRelativeGraphql,
} from './types';
import * as ProductDiscountValueRelative from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueRelative,
      TProductDiscountValueRelative
    >(
      'default',
      ProductDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueRelative,
      TProductDiscountValueRelative
    >(
      'rest',
      ProductDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueRelative,
      TProductDiscountValueRelativeGraphql
    >(
      'graphql',
      ProductDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
        __typename: 'RelativeDiscountValue',
      })
    )
  );
});
