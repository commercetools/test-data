import type { TBuilder } from '@commercetools-test-data/core';

export type TAppliedMenuVisibilities = {
  name: string;
  value: boolean;
};

export type TAppliedMenuVisibilitiesGraphql = TAppliedMenuVisibilities & {
  __typename: 'AppliedMenuVisibilities';
};

export type TAppliedMenuVisibilitiesBuilder =
  TBuilder<TAppliedMenuVisibilities>;
export type TCreateAppliedMenuVisibilitiesBuilder =
  () => TAppliedMenuVisibilitiesBuilder;
