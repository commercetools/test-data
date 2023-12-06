import type { State, StateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TState = State;
export type TStateDraft = StateDraft;

export type TStateGraphql = TState & {
  __typename: 'State';
};
export type TStateDraftGraphql = TStateDraft;

export type TStateBuilder = TBuilder<TState>;
export type TStateDraftBuilder = TBuilder<TStateDraft>;
export type TCreateStateBuilder = () => TStateBuilder;
export type TCreateStateDraftBuilder = () => TStateDraftBuilder;
