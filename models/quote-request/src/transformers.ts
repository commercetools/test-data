import {
  BusinessUnitKeyReference,
  StoreKeyReference,
} from '@commercetools/platform-sdk';
import {
  Reference,
  KeyReference,
  TReference,
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';

import type {
  TQuoteRequest,
  TQuoteRequestRest,
  TQuoteRequestGraphql,
} from './types';

const transformers = {
  default: Transformer<TQuoteRequest, TQuoteRequest>('default', {
    buildFields: [
      'customer',
      'customerGroup',
      'store',
      'lineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'state',
      'cart',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TQuoteRequest, TQuoteRequestRest>('rest', {
    buildFields: [
      'customer',
      'customerGroup',
      'store',
      'lineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'state',
      'cart',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    replaceFields: ({ fields }) => {
      const customer = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .build<TReference<'customer'>>();

      const customerGroup = Reference.presets
        .customerGroupReference()
        .id(fields.customerGroup?.id)
        .build<TReference<'customer-group'>>();

      const store = KeyReference.random()
        .typeId('store')
        .key(fields.store?.key)
        .buildRest<StoreKeyReference>();

      const state = Reference.presets
        .stateReference()
        .id(fields.state?.id)
        .build<TReference<'state'>>();

      const businessUnit = KeyReference.random()
        .typeId('business-unit')
        .key(fields.businessUnit?.key)
        .buildRest<BusinessUnitKeyReference>();

      return {
        ...fields,
        customer,
        customerGroup: fields.customerGroup ? customerGroup : undefined,
        store: fields.store ? store : undefined,
        state: fields.state ? state : undefined,
        businessUnit: fields.businessUnit ? businessUnit : undefined,
      };
    },
  }),
  graphql: Transformer<TQuoteRequest, TQuoteRequestGraphql>('graphql', {
    buildFields: [
      'customer',
      'customerGroup',
      'store',
      'lineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'state',
      'cart',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: ({ fields }) => {
      const customerRef: TReferenceGraphql = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .typeId('customer')
        .buildGraphql();

      const customerGroupRef: TReferenceGraphql = Reference.presets
        .customerGroupReference()
        .id(fields.customerGroup?.id)
        .typeId('customer-group')
        .buildGraphql();

      const storeRef: TKeyReferenceGraphql = KeyReference.presets
        .store()
        .key(fields.store?.key)
        .buildGraphql();

      const stateRef: TReferenceGraphql = Reference.presets
        .stateReference()
        .id(fields.state?.id)
        .typeId('state')
        .buildGraphql();

      const cartRef: TReferenceGraphql | null = fields.cart
        ? Reference.presets
            .cartReference()
            .id(fields.cart.id)
            .typeId('cart')
            .buildGraphql()
        : null;

      const businessUnitRef: TKeyReferenceGraphql = KeyReference.presets
        .businessUnit()
        .key(fields.businessUnit?.key)
        .buildGraphql();

      return {
        customerRef,
        customerGroupRef: fields.customerGroup ? customerGroupRef : undefined,
        storeRef: fields.store ? storeRef : undefined,
        stateRef: fields.state ? stateRef : undefined,
        cartRef: fields.cart ? cartRef : undefined,
        businessUnitRef: fields.businessUnit ? businessUnitRef : undefined,
        __typename: 'QuoteRequest',
      };
    },
    removeFields: ['cart'],
  }),
};

export default transformers;
