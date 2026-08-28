/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TCustomerLimitsProjection } from './types';
import * as CustomerLimitsProjection from './index';

const expectedLimitWithCurrent = expect.objectContaining({
  limit: expect.any(Number),
  current: expect.any(Number),
});

const expectedLimitWithMaxGroupsPerCustomer = expect.objectContaining({
  limit: expect.any(Number),
});

describe('building', () => {
  describe('with total limit and current', () => {
    it(
      ...createBuilderSpec<
        TCustomerLimitsProjection,
        TCustomerLimitsProjection
      >(
        'default',
        CustomerLimitsProjection.presets.withLimitAndCurrent(),
        expect.objectContaining({
          total: expectedLimitWithCurrent,
        })
      )
    );
    it(
      ...createBuilderSpec<
        TCustomerLimitsProjection,
        TCustomerLimitsProjection
      >(
        'rest',
        CustomerLimitsProjection.presets.withLimitAndCurrent(),
        expect.objectContaining({
          total: expectedLimitWithCurrent,
        })
      )
    );
    it(
      ...createBuilderSpec<
        TCustomerLimitsProjection,
        TCustomerLimitsProjection
      >(
        'graphql',
        CustomerLimitsProjection.presets.withLimitAndCurrent(),
        expect.objectContaining({
          total: expectedLimitWithCurrent,
          __typename: 'CustomerLimitsProjection',
        })
      )
    );
  });
  describe('with total limit and current, and max groups per customer', () => {
    it(
      ...createBuilderSpec<
        TCustomerLimitsProjection,
        TCustomerLimitsProjection
      >(
        'default',
        CustomerLimitsProjection.presets.withTotalLimitAndCurrentAndMaxGroupsPerCustomer(),
        expect.objectContaining({
          total: expectedLimitWithCurrent,
          maxGroupsPerCustomer: expectedLimitWithMaxGroupsPerCustomer,
        })
      )
    );
    it(
      ...createBuilderSpec<
        TCustomerLimitsProjection,
        TCustomerLimitsProjection
      >(
        'rest',
        CustomerLimitsProjection.presets.withTotalLimitAndCurrentAndMaxGroupsPerCustomer(),
        expect.objectContaining({
          total: expectedLimitWithCurrent,
          maxGroupsPerCustomer: expectedLimitWithMaxGroupsPerCustomer,
        })
      )
    );
    it(
      ...createBuilderSpec<
        TCustomerLimitsProjection,
        TCustomerLimitsProjection
      >(
        'graphql',
        CustomerLimitsProjection.presets.withTotalLimitAndCurrentAndMaxGroupsPerCustomer(),
        expect.objectContaining({
          total: expectedLimitWithCurrent,
          maxGroupsPerCustomer: expectedLimitWithMaxGroupsPerCustomer,
          __typename: 'CustomerLimitsProjection',
        })
      )
    );
  });
});
