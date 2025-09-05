import { fake, oneOf, type TModelFieldsConfig, sequence } from '@/core';
import { Company } from '@/models/business-unit';
import { CartDiscount } from '@/models/cart/cart-discount';
import {
  Address,
  CentPrecisionMoney,
  ClientLogging,
  KeyReference,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import { CustomerGroup } from '@/models/customer/customer-group';
import { StoreGraphql } from '@/models/store';
import { createRelatedDates } from '@/utils';
import {
  DiscountCodeInfoGraphql,
  DiscountCodeInfoRest,
  LineItemGraphql,
  LineItemRest,
} from '../index';
import {
  cartState,
  inventoryMode,
  origin,
  priceRoundingMode,
  shippingMode,
  taxCalculationMode,
  taxMode,
  taxRoundingMode,
} from './constants';
import { TCartGraphql, TCartRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  id: fake((f) => f.string.uuid()),
  version: sequence(),
  key: fake((f) => f.lorem.slug(2)),
  customerId: fake((f) => f.string.uuid()),
  customerEmail: fake((f) => f.internet.email()),
  anonymousId: fake((f) => f.string.uuid()),
  country: fake((f) => f.location.countryCode()),
  inventoryMode: oneOf(...Object.values(inventoryMode)),
  taxMode: oneOf(...Object.values(taxMode)),
  taxRoundingMode: oneOf(...Object.values(taxRoundingMode)),
  taxCalculationMode: oneOf(...Object.values(taxCalculationMode)),
  customLineItems: [],
  totalLineItemQuantity: fake((f) => f.number.int()),
  shippingAddress: fake(() => Address.random()),
  billingAddress: fake(() => Address.random()),
  custom: null,
  locale: oneOf('en-US', 'de-DE', 'es-ES'),
  deleteDaysAfterLastModification: null,
  shippingRateInput: null,
  origin: oneOf(...Object.values(origin)),
  shippingMode: oneOf(...Object.values(shippingMode)),
  shippingInfo: null,
  shipping: [],
  itemShippingAddresses: fake(() => [Address.random()]),
  directDiscounts: [],
  totalPrice: fake(() => CentPrecisionMoney.random()),
  taxedPrice: null,
  taxedShippingPrice: null,
  discountOnTotalPrice: null,
  shippingKey: fake((f) => f.lorem.slug(2)),
  shippingCustomFields: null,
  createdAt: fake(getOlderDate),
  createdBy: fake(() => ClientLogging.random()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: fake(() => ClientLogging.random()),
  cartState: oneOf(...Object.values(cartState)),
  paymentInfo: null,
  discountTypeCombination: null,
  priceRoundingMode: oneOf(...Object.values(priceRoundingMode)),
};

export const restFieldsConfig: TModelFieldsConfig<TCartRest> = {
  fields: {
    ...commonFieldsConfig,
    lineItems: fake(() => [LineItemRest.random()]),
    discountCodes: fake((f) => [DiscountCodeInfoRest.random()]),
    customerGroup: fake(() => ReferenceRest.presets.customerGroupReference()),
    businessUnit: fake(() => KeyReference.random().typeId('business-unit')),
    store: fake(() => KeyReference.random().typeId('store')),
    refusedGifts: fake(() => [ReferenceRest.presets.cartDiscountReference()]),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCartGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Cart',
    discountCodes: fake(() => [DiscountCodeInfoGraphql.random()]),
    lineItems: fake(() => [LineItemGraphql.random()]),
    customerGroup: fake(() => CustomerGroup.random()),
    customerGroupRef: null,
    businessUnit: fake(() => Company.random()),
    businessUnitRef: null,
    store: fake(() => StoreGraphql.random()),
    storeRef: null,
    refusedGifts: fake(() => [CartDiscount.random()]),
    refusedGiftsRefs: null,
    customer: null,
    placement: null,
    lock: null,
  },
  postBuild: (model) => {
    const storeRef = model.store
      ? KeyReference.presets.store().key(model.store.key).buildGraphql()
      : null;
    const businessUnitRef = model.businessUnit
      ? KeyReference.presets
          .businessUnit()
          .key(model.businessUnit.key)
          .buildGraphql()
      : null;
    const customerGroupRef = model.customerGroup
      ? ReferenceGraphql.presets
          .customerGroupReference()
          .id(model.customerGroup.id)
          .buildGraphql()
      : null;
    const refusedGiftsRefs = model.refusedGifts.map((refusedGift) =>
      ReferenceGraphql.presets
        .cartDiscountReference()
        .id(refusedGift.id)
        .buildGraphql()
    );

    return {
      ...model,
      storeRef,
      businessUnitRef,
      customerGroupRef,
      refusedGiftsRefs,
    };
  },
};
