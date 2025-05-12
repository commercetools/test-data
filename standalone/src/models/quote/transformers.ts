import {
  BusinessUnitKeyReference,
  StoreKeyReference,
} from '@commercetools/platform-sdk';
import { Transformer } from '../../core';
import {
  Reference,
  KeyReference,
  TReference,
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '../commons';

import type { TQuote, TQuoteRest, TQuoteGraphql } from './types';

const transformers = {
  default: Transformer<TQuote, TQuote>('default', {
    buildFields: [
      'quoteRequest',
      'stagedQuote',
      'customer',
      'customerGroup',
      'store',
      'lineItems',
      'customLineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'directDiscounts',
      'state',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TQuote, TQuoteRest>('rest', {
    buildFields: [
      'quoteRequest',
      'stagedQuote',
      'customer',
      'customerGroup',
      'store',
      'lineItems',
      'customLineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'directDiscounts',
      'state',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    replaceFields: ({ fields }) => {
      const quoteRequest = Reference.presets
        .quoteRequestReference()
        .id(fields.quoteRequest.id)
        .build<TReference<'quote-request'>>();

      const stagedQuote = Reference.presets
        .stagedQuoteReference()
        .id(fields.stagedQuote.id)
        .build<TReference<'staged-quote'>>();

      const customer = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .build<TReference<'customer'>>();

      const customerGroup = Reference.presets
        .customerGroupReference()
        .id(fields.customerGroup?.id)
        .build<TReference<'customer-group'>>();

      const store = KeyReference.presets
        .store()
        .key(fields.store?.key)
        .buildRest<StoreKeyReference>();

      const state = Reference.presets
        .stateReference()
        .id(fields.state?.id)
        .build<TReference<'state'>>();

      const businessUnit = KeyReference.presets
        .businessUnit()
        .key(fields.businessUnit?.key)
        .buildRest<BusinessUnitKeyReference>();

      return {
        ...fields,
        quoteRequest,
        stagedQuote,
        customer,
        customerGroup: fields.customerGroup ? customerGroup : undefined,
        store: fields.store ? store : undefined,
        state: fields.state ? state : undefined,
        businessUnit: fields.businessUnit ? businessUnit : undefined,
      };
    },
  }),
  graphql: Transformer<TQuote, TQuoteGraphql>('graphql', {
    buildFields: [
      'quoteRequest',
      'stagedQuote',
      'customer',
      'customerGroup',
      'store',
      'lineItems',
      'customLineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'directDiscounts',
      'state',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: ({ fields }) => {
      const quoteRequestRef: TReferenceGraphql = Reference.presets
        .quoteRequestReference()
        .id(fields.quoteRequest.id)
        .buildGraphql();

      const stagedQuoteRef: TReferenceGraphql = Reference.presets
        .stagedQuoteReference()
        .id(fields.stagedQuote.id)
        .buildGraphql();

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

      const businessUnitRef: TKeyReferenceGraphql = KeyReference.presets
        .businessUnit()
        .key(fields.businessUnit?.key)
        .buildGraphql();

      return {
        quoteRequestRef,
        stagedQuoteRef,
        customerRef,
        customerGroupRef: fields.customerGroup ? customerGroupRef : undefined,
        storeRef: fields.store ? storeRef : undefined,
        stateRef: fields.state ? stateRef : undefined,
        businessUnitRef: fields.businessUnit ? businessUnitRef : undefined,
        __typename: 'Quote',
      };
    },
  }),
};

export default transformers;
