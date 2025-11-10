import { fake, type TModelFieldsConfig } from '@/core';
import { LocalizedString } from '@/models/commons';
import type {
  TPaymentMethodInfoRest,
  TPaymentMethodInfoGraphql,
} from './types';

// Reference: https://docs.commercetools.com/api/projects/payments#paymentmethodinfo

const commonFieldsConfig = {
  paymentInterface: fake((f) => f.lorem.slug(2)),
  method: fake((f) => f.lorem.slug(1)),
  token: null,
  interfaceAccount: null,
  custom: null,
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentMethodInfoRest> = {
  fields: {
    ...commonFieldsConfig,
    name: fake((f) => LocalizedString.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentMethodInfoGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      name: null,
      nameAllLocales: fake(() => LocalizedString.random()),
      __typename: 'PaymentMethodInfo',
    },
    postBuild: (model) => {
      const name = model.nameAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
        : model.name;

      return {
        ...model,
        name,
      };
    },
  };
