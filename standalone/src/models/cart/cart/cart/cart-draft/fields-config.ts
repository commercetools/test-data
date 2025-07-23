import { fake, type TModelFieldsConfig, oneOf } from '@/core';
import { ReferenceDraft, AddressDraft } from '@/models/commons';
import { LineItemDraft } from '../../index';
import {
  inventoryMode,
  origin,
  priceRoundingMode,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from '../constants';
import { TCartDraftGraphql, TCartDraftRest } from '../types';

const commonFieldsConfig = {
  currency: oneOf('EUR', 'USD'),
  key: fake((f) => f.lorem.slug(2)),
  customerId: fake((f) => f.string.uuid()),
  customerEmail: fake((f) => f.internet.email()),
  customerGroup: fake(() => ReferenceDraft.random().typeId('customer-group')),
  anonymousId: fake((f) => f.string.uuid()),
  businessUnit: fake(() => ReferenceDraft.random().typeId('business-unit')),
  store: fake(() => ReferenceDraft.random().typeId('store')),
  country: fake((f) => f.location.countryCode()),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  taxMode: oneOf(...Object.values(taxMode)),
  taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
  lineItems: fake(() => [LineItemDraft.random()]),
  customLineItems: [],
  shippingAddress: fake(() => AddressDraft.random()),
  billingAddress: fake(() => AddressDraft.random()),
  shippingMethod: fake(() => ReferenceDraft.random().typeId('shipping-method')),
  externalTaxRateForShippingMethod: null,
  custom: null,
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  deleteDaysAfterLastModification: null,
  shippingRateInput: null,
  origin: oneOf(...Object.values(origin)),
  shippingMode: oneOf(...Object.values(shippingMode)),
  customShipping: [],
  shipping: [],
  itemShippingAddresses: [],
  discountCodes: fake((f) => [f.lorem.word()]),
  priceRoundingMode: oneOf(...Object.values(priceRoundingMode)),
};

export const restFieldsConfig: TModelFieldsConfig<TCartDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TCartDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
  },
};
