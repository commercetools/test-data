/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TZoneRateDraft, TZoneRateDraftGraphql } from '../types';
import * as ZoneRateDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TZoneRateDraft, TZoneRateDraft>(
      'default',
      ZoneRateDraft.random(),
      expect.objectContaining({
        zone: expect.objectContaining({
          typeId: 'zone',
        }),
        shippingRates: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TZoneRateDraft, TZoneRateDraft>(
      'rest',
      ZoneRateDraft.random(),
      expect.objectContaining({
        zone: expect.objectContaining({
          typeId: 'zone',
        }),
        shippingRates: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TZoneRateDraft, TZoneRateDraftGraphql>(
      'graphql',
      ZoneRateDraft.random(),
      expect.objectContaining({
        __typename: 'ZoneRateDraft',
        zone: expect.objectContaining({
          __typename: 'Reference',
          typeId: 'zone',
        }),
        shippingRates: expect.any(Array),
      })
    )
  );
});
