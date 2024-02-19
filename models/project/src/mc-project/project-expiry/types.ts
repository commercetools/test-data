import type { TBuilder } from '@commercetools-test-data/core';

export type TProjectExpiry = {
  isActive: boolean;
  daysLeft?: number;
};

export type TProjectExpiryGraphql = TProjectExpiry & {
  __typename: 'ProjectExpiry';
};

export type TProjectExpiryBuilder = TBuilder<TProjectExpiry>;
export type TCreateProjectExpiryBuilder = () => TProjectExpiryBuilder;
