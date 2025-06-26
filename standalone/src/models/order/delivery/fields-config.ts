import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates } from '@/utils';
import { DeliveryItemRest, DeliveryItemGraphql } from '../delivery-item';
import { ParcelRest, ParcelGraphql } from '../parcel';
import { TDeliveryRest, TDeliveryGraphql } from './types';

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  key: null,
  address: null,
  custom: null,
  createdAt: fake(getOlderDate),
};

export const restFieldsConfig: TModelFieldsConfig<TDeliveryRest> = {
  fields: {
    ...commonFieldsConfig,
    items: [fake(() => DeliveryItemRest.random())],
    parcels: [fake(() => ParcelRest.random())],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDeliveryGraphql> = {
  fields: {
    ...commonFieldsConfig,
    items: [fake(() => DeliveryItemGraphql.random())],
    parcels: [fake(() => ParcelGraphql.random())],
    __typename: 'Delivery',
  },
};
