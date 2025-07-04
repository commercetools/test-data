import type { TBuilder } from '@/core';
import { LocalizedString } from '@/models/commons';
import { State, StateGraphql, StateRest } from '../index';
import type { TState, TStateGraphql, TStateRest } from '../types';

const populatePreset = <TModel extends TStateGraphql | TStateRest>(
  builder: TBuilder<TModel>,
  nameField: keyof TModel = 'name'
) => {
  return builder[nameField](
    LocalizedString.presets.empty().en('Packed').de('Verpackt')
  ).key('packed-state');
};

export const restPreset = (): TBuilder<TStateRest> =>
  populatePreset(StateRest.random());

export const graphqlPreset = (): TBuilder<TStateGraphql> =>
  populatePreset(StateGraphql.random(), 'nameAllLocales');

export const compatPreset = (): TBuilder<TState> =>
  populatePreset(State.random());
