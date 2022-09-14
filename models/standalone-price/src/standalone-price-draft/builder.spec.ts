/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TStandalonePriceDraft,
  TStandalonePriceDraftGraphQL,
} from '../types';
import * as StandalonePriceDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStandalonePriceDraft, TStandalonePriceDraft>(
      'default',
      StandalonePriceDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: null,
        country: expect.any(String),
        customerGroup: null,
        channel: null,
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: null,
        discounted: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePriceDraft, TStandalonePriceDraft>(
      'rest',
      StandalonePriceDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        value: null,
        country: expect.any(String),
        customerGroup: null,
        channel: null,
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        tiers: null,
        discounted: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePriceDraft, TStandalonePriceDraftGraphQL>(
      'graphql',
      StandalonePriceDraft.random(),
      expect.objectContaining({
        __typename: 'StandalonePriceDraft',
        // ..
      })
    )
  );
});
