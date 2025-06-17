import { fake, type TModelFieldsConfig } from '@/core';
import { Address } from '@/models/commons';
import { ShippingInfoRest, ShippingInfoGraphql } from '../shipping-info';
import type { TShippingGraphql, TShippingRest } from './types';

const commonFieldsConfig = {
  shippingKey: fake((f) => f.lorem.slug(2)),
  shippingAddress: fake(() => Address.random()),
  shippingRateInput: null,
  shippingCustomFields: null,
};

export const restFieldsConfig: TModelFieldsConfig<TShippingRest> = {
  fields: {
    ...commonFieldsConfig,
    shippingInfo: fake(() => ShippingInfoRest.random()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingGraphql> = {
  fields: {
    ...commonFieldsConfig,
    shippingInfo: fake(() => ShippingInfoGraphql.random().buildGraphql()),
    __typename: 'Shipping',
  },
};
