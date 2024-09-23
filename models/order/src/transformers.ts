import { Reference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import omit from 'lodash/omit';
import type { TOrder, TOrderGraphql, TOrderRest } from './types';

const commonBuildFields: (keyof TOrder)[] = [
  'createdBy',
  'lastModifiedBy',
  'lineItems',
  'totalPrice',
  'shippingAddress',
  'billingAddress',
  'customerGroup',
  'refusedGifts',
  'cart',
  'itemShippingAddresses',
  'returnInfo',
  'shippingInfo',
];

const transformers = {
  default: Transformer<TOrder, TOrder>('default', {
    buildFields: [...commonBuildFields, 'customer'],
  }),
  rest: Transformer<TOrder, TOrderRest>('rest', {
    buildFields: commonBuildFields,
    replaceFields: ({ fields }) => {
      return {
        ...omit(fields, 'customer'),
        customerGroup: fields.customerGroup
          ? Reference.random()
              .id(fields.customerGroup.id)
              .typeId('customer-group')
              .buildRest()
          : undefined,
        refusedGifts: (fields.refusedGifts || []).map((discount) =>
          Reference.random().id(discount.id).typeId('cart-discount').buildRest()
        ),
        cart: fields.cart
          ? Reference.random().id(fields.cart.id).typeId('cart').buildRest()
          : undefined,
        // TODO: transform from field when store model is available
        store: Reference.random().typeId('store').buildRest(),
        // TODO: transform from field when businessUnit model is available
        businessUnit: Reference.random().typeId('business-unit').buildRest(),
        // TODO: transform from field when state model is available
        state: Reference.random().typeId('state').buildRest(),
        // TODO: transform from field when quote model is available
        quote: Reference.random().typeId('quote').buildRest(),
      };
    },
  }),
  graphql: Transformer<TOrder, TOrderGraphql>('graphql', {
    buildFields: [...commonBuildFields, 'customer'],
    addFields: ({ fields }) => ({
      customerGroupRef: fields.customerGroup
        ? Reference.random()
            .id(fields.customerGroup.id)
            .typeId('customer-group')
            .buildGraphql()
        : null,
      refusedGiftsRef: (fields.refusedGifts || []).map((discount) =>
        Reference.random()
          .id(discount.id)
          .typeId('cart-discount')
          .buildGraphql()
      ),
      cartRef: fields.cart
        ? Reference.random().id(fields.cart.id).typeId('cart').buildGraphql()
        : null,
      // TODO: transform from field when store model is available
      storeRef: Reference.random().typeId('store').buildGraphql(),
      // TODO: transform from field when businessUnit model is available
      businessUnitRef: Reference.random()
        .typeId('business-unit')
        .buildGraphql(),
      // TODO: transform from field when state model is available
      stateRef: Reference.random().typeId('state').buildGraphql(),
      // TODO: transform from field when quote model is available
      quoteRef: Reference.random().typeId('quote').buildGraphql(),
      __typename: 'Order',
    }),
  }),
};

export default transformers;
