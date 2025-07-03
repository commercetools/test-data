import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { State } from '@/models/state';
import type { TItemStateGraphql, TItemStateRest } from './types';

// Reference REST docs: https://docs.commercetools.com/api/projects/carts#itemstate

const commonFieldsConfig = {
  quantity: fake((f) => f.number.int({ min: 1, max: 25 })),
};

export const restFieldsConfig: TModelFieldsConfig<TItemStateRest> = {
  fields: {
    ...commonFieldsConfig,
    state: fake(() => ReferenceRest.presets.stateReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TItemStateGraphql> = {
  fields: {
    ...commonFieldsConfig,
    state: fake(() => State.random()),
    stateRef: null,
    __typename: 'ItemState',
  },
  postBuild: (model) => {
    const stateRef = ReferenceGraphql.presets.stateReference();

    if (model.state) {
      stateRef.id(model.state.id);
    }

    return {
      ...model,
      stateRef: stateRef.build(),
    };
  },
};
