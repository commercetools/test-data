import { BusinessUnitKeyReference } from '@commercetools/platform-sdk';
import { Transformer } from '@/core';
import {
  Reference,
  KeyReference,
  TReference,
  TReferenceGraphql,
  TKeyReferenceGraphql,
} from '@/models/commons';

import type {
  TStagedQuote,
  TStagedQuoteRest,
  TStagedQuoteGraphql,
} from './types';

const transformers = {
  default: Transformer<TStagedQuote, TStagedQuote>('default', {
    buildFields: [
      'customer',
      'quoteRequest',
      'quotationCart',
      'state',
      'businessUnit',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TStagedQuote, TStagedQuoteRest>('rest', {
    buildFields: [
      'customer',
      'quoteRequest',
      'quotationCart',
      'state',
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

      const quoteRequest = Reference.presets
        .quoteRequestReference()
        .id(fields.quoteRequest.id)
        .build<TReference<'quote-request'>>();

      const quotationCart = Reference.presets
        .cartReference()
        .id(fields.quotationCart.id)
        .build<TReference<'cart'>>();

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
        customer,
        quoteRequest,
        quotationCart,
        state: fields.state ? state : undefined,
        businessUnit: fields.businessUnit ? businessUnit : undefined,
      };
    },
  }),
  graphql: Transformer<TStagedQuote, TStagedQuoteGraphql>('graphql', {
    buildFields: [
      'customer',
      'quoteRequest',
      'quotationCart',
      'state',
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

      const quoteRequestRef: TReferenceGraphql = Reference.presets
        .quoteRequestReference()
        .id(fields.quoteRequest.id)
        .typeId('quote-request')
        .buildGraphql();

      const quotationCartRef: TReferenceGraphql = Reference.presets
        .cartReference()
        .id(fields.quotationCart.id)
        .typeId('cart')
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
        customerRef,
        quoteRequestRef,
        quotationCartRef,
        stateRef: fields.state ? stateRef : undefined,
        businessUnitRef: fields.businessUnit ? businessUnitRef : undefined,
        __typename: 'StagedQuote',
      };
    },
  }),
};

export default transformers;
