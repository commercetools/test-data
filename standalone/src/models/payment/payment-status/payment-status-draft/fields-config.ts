import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceDraftGraphql, ReferenceDraftRest } from '@/models/commons';
import type {
  TPaymentStatusDraftRest,
  TPaymentStatusDraftGraphql,
} from '../types';

// https://docs.commercetools.com/api/projects/payments#paymentstatus

const commonFieldsConfig = {
  interfaceCode: fake((f) => f.string.uuid()),
  interfaceText: fake((f) => f.lorem.word()),
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentStatusDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    state: fake(() => ReferenceDraftRest.random().typeId('state')),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentStatusDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      state: fake(() => ReferenceDraftGraphql.random().typeId('state')),
    },
  };
