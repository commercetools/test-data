import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedStringDraft } from '@/models/commons';
import type {
  TPaymentMethodInfoDraftRest,
  TPaymentMethodInfoDraftGraphql,
} from '../types';

// Reference: https://docs.commercetools.com/api/projects/payments#paymentmethodinfodraft

const commonFieldsConfig = {
  paymentInterface: fake((f) => f.lorem.slug(2)),
  method: fake((f) => f.lorem.slug(1)),
  name: fake((f) => LocalizedStringDraft.random()),
  token: null,
  interfaceAccount: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentMethodInfoDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentMethodInfoDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
