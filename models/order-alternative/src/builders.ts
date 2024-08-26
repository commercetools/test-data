import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlGenerator, restGenerator } from './generators';
import { TCreateOrderBuilder, TOrderGraphql, TOrderRest } from './types';

const commonBuildFields = [
  'customerGroup',
  'businessUnit',
  'store',
  'lineItems',
  'customLineItems',
  'taxedShippingPrice',
  'discountOnTotalPrice',
  'billingAddress',
  'shippingAddress',
  'shippingInfo',
  'shippingRateInput',
  'shippingCustomFields',
  'shipping',
  'totalPrice',
  'itemShippingAddresses',
  'discountCodes',
  'directDiscounts',
  'refusedGifts',
  'paymentInfo',
  'cart',
  'quote',
  'state',
  'returnInfo',
  'custom',
  'createdBy',
  'lastModifiedBy',
];

export const RestModelBuilder: TCreateOrderBuilder<TOrderRest> = () =>
  createSpecializedBuilder({
    generator: restGenerator,
    type: 'rest',
    buildFields: commonBuildFields as (keyof TOrderRest)[],
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<TOrderGraphql> = () =>
  createSpecializedBuilder({
    generator: graphqlGenerator,
    type: 'graphql',
    buildFields: [
      ...(commonBuildFields as (keyof TOrderGraphql)[]),
      'customerGroupRef',
      'businessUnitRef',
      'storeRef',
      'cartRef',
      'quoteRef',
      'stateRef',
    ],
  });
