import type { State, StateDraft } from '@commercetools/platform-sdk';
import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';

export type TState = State;
export type TStateDraft = StateDraft;

export type TStateGraphql = Omit<TState, 'name' | 'description'> & {
  name?: string | null;
  description?: string | null;
  nameAllLocales?: TLocalizedStringGraphql | null;
  descriptionAllLocales?: TLocalizedStringGraphql | null;
  __typename: 'State';
};
export type TStateDraftGraphql = TStateDraft;

export type TStateBuilder = TBuilder<TState>;
export type TStateDraftBuilder = TBuilder<TStateDraft>;
export type TCreateStateBuilder = () => TStateBuilder;
export type TCreateStateDraftBuilder = () => TStateDraftBuilder;
