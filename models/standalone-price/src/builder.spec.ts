/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TStandalonePrice, TStandalonePriceGraphQL } from './types';
import * as StandalonePrice from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStandalonePrice, TStandalonePrice>(
      'default',
      StandalonePrice.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
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
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePrice, TStandalonePrice>(
      'rest',
      StandalonePrice.random().id('bbbe579e-fec5-4312-94eb-54538c003c17'),
      expect.objectContaining({
        id: 'bbbe579e-fec5-4312-94eb-54538c003c17',
        key: expect.any(String),
        version: expect.any(Number),
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
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStandalonePrice, TStandalonePriceGraphQL>(
      'graphql',
      StandalonePrice.random().id('xbbe579e-fec4-4332-94ec-54538c003d13'),
      expect.objectContaining({
        __typename: 'StandalonePrice',
        id: 'xbbe579e-fec4-4332-94ec-54538c003d13',
        // ..
      })
    )
  );
});
