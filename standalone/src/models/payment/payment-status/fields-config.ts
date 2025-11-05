import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { StateGraphql } from '@/models/state';
import type { TPaymentStatusRest, TPaymentStatusGraphql } from './types';

// https://docs.commercetools.com/api/projects/payments#paymentstatus

const commonFieldsConfig = {
  interfaceCode: fake((f) => f.string.uuid()),
  interfaceText: fake((f) => f.lorem.word()),
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentStatusRest> = {
  fields: {
    ...commonFieldsConfig,
    state: fake((f) => ReferenceRest.presets.stateReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentStatusGraphql> = {
  fields: {
    ...commonFieldsConfig,
    state: fake((f) => StateGraphql.random()),
    stateRef: null,
    __typename: 'PaymentStatus',
  },
  postBuild: (model) => {
    const stateRef = model.state
      ? ReferenceGraphql.presets
          .stateReference()
          .id(model.state.id)
          .buildGraphql()
      : null;

    return {
      ...model,
      stateRef,
    };
  },
};
