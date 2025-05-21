import type { TBuilder } from '@/core';

export type TAppliedDataFence = {
  type: string;
  group: string;
  name: string;
  value: boolean;
};

export type TAppliedDataFenceGraphql = TAppliedDataFence & {
  __typename: 'AppliedDataFence';
};

export type TAppliedDataFenceBuilder = TBuilder<TAppliedDataFence>;
export type TCreateAppliedDataFenceBuilder = () => TAppliedDataFenceBuilder;
