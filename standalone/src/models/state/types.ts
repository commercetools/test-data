import type { State, StateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpState, TCtpStateDraft } from '@/graphql-types';

/**
 * @deprecated use 'TStateRest' or 'TStateGraphql' instead
 */
export type TState = State;
export type TStateRest = State;
export type TStateGraphql = TCtpState;

/**
 * @deprecated use 'TStateDraftRest' or 'TStateDraftGraphql' instead
 */
export type TStateDraft = StateDraft;
export type TStateDraftRest = StateDraft;
export type TStateDraftGraphql = TCtpStateDraft;

export type TCreateStateBuilder<
  TStateModel extends
    | TStateRest
    | TStateGraphql
    | TStateDraftRest
    | TStateDraftGraphql,
> = () => TBuilder<TStateModel>;
