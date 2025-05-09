/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import {
  TProductDiscountValueExternalDraft,
  TProductDiscountValueExternalDraftGraphql,
} from '../types';
import * as ProductDiscountValueExternalDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TProductDiscountValueExternalDraft,
      TProductDiscountValueExternalDraft
    >(
      'default',
      ProductDiscountValueExternalDraft.random(),
      expect.objectContaining({
        type: 'external',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueExternalDraft,
      TProductDiscountValueExternalDraft
    >(
      'rest',
      ProductDiscountValueExternalDraft.random(),
      expect.objectContaining({
        type: 'external',
      })
    )
  );

  it(
    ...createBuilderSpec<
      TProductDiscountValueExternalDraft,
      TProductDiscountValueExternalDraftGraphql
    >(
      'graphql',
      ProductDiscountValueExternalDraft.random(),
      expect.objectContaining({ external: {} })
    )
  );
});
