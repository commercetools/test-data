import type { TBuilder } from '@commercetools-test-data/core';

export type TProjectSuspension = {
  isActive: boolean;
  reason?: string;
};

export type TProjectSuspensionGraphql = TProjectSuspension & {
  __typename: 'ProjectSuspension';
};

export type TProjectSuspensionBuilder = TBuilder<TProjectSuspension>;
export type TCreateProjectSuspensionBuilder = () => TProjectSuspensionBuilder;
