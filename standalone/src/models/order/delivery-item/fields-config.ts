import { fake, type TModelFieldsConfig } from '@/core';
import { TDeliveryItemRest, TDeliveryItemGraphql } from './types';

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  quantity: fake((f) => f.number.int()),
};

export const restFieldsConfig: TModelFieldsConfig<TDeliveryItemRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDeliveryItemGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'DeliveryItem',
  },
};
