import type { TBuilder } from '@/core';

export type TAppliedActionRight = {
  group: string;
  name: string;
  value: boolean;
};

export type TAppliedActionRightGraphql = TAppliedActionRight & {
  __typename: 'AppliedActionRight';
};

export type TAppliedActionRightBuilder = TBuilder<TAppliedActionRight>;
export type TCreateAppliedActionRightBuilder = () => TAppliedActionRightBuilder;
