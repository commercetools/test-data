/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TZoneRate, TZoneRateGraphql } from './types';
import * as ZoneRate from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TZoneRate, TZoneRate>(
      'default',
      ZoneRate.random(),
      expect.objectContaining({
        zone: expect.objectContaining({
          id: expect.any(String),
        }),
        shippingRates: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TZoneRate, TZoneRate>(
      'rest',
      ZoneRate.random(),
      expect.objectContaining({
        zone: expect.objectContaining({
          typeId: expect.any(String),
        }),
        shippingRates: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TZoneRate, TZoneRateGraphql>(
      'graphql',
      ZoneRate.random(),
      expect.objectContaining({
        __typename: 'ZoneRate',
        zone: expect.objectContaining({
          __typename: 'Zone',
        }),
        shippingRates: expect.any(Array),
        zoneRef: expect.objectContaining({
          typeId: 'zone',
          __typename: 'Reference',
        }),
      })
    )
  );
});
