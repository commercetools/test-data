import type { TBuilder } from '@commercetools-test-data/core';

export type TLimitWithCurrent = {
  limit: number;
  current: number;
};

export type TLimitWithCurrentGraphql = TLimitWithCurrent & {
  __typename: 'LimitWithCurrent';
};

export type TLimitWithCurrentBuilder = TBuilder<TLimitWithCurrent>;
export type TCreateLimitWithCurrentBuilder = () => TLimitWithCurrentBuilder;
