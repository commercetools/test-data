/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../core/test-utils';
import type {
  TCartDiscountValueRelative,
  TCartDiscountValueRelativeGraphql,
} from './types';
import * as CartDiscountValueRelative from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueRelative,
      TCartDiscountValueRelative
    >(
      'default',
      CartDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueRelative,
      TCartDiscountValueRelative
    >(
      'rest',
      CartDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueRelative,
      TCartDiscountValueRelativeGraphql
    >(
      'graphql',
      CartDiscountValueRelative.random(),
      expect.objectContaining({
        type: 'relative',
        permyriad: expect.any(Number),
        __typename: 'RelativeDiscountValue',
      })
    )
  );
});
