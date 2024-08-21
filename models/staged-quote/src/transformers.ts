import {
  Company,
  TCompanyGraphql,
} from '@commercetools-test-data/business-unit';
import { Cart, TCartGraphql } from '@commercetools-test-data/cart';
import {
  Reference,
  KeyReference,
  TReferenceGraphql,
  TKeyReferenceGraphql,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';

import { Customer, TCustomerGraphql } from '@commercetools-test-data/customer';
import {
  QuoteRequest,
  TQuoteRequestGraphql,
} from '@commercetools-test-data/quote-request';
import { State, TStateGraphql } from '@commercetools-test-data/state';
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
  }),
  graphql: Transformer<TStagedQuote, TStagedQuoteGraphql>('graphql', {
    buildFields: ['custom', 'createdBy', 'lastModifiedBy'],
    replaceFields: ({ fields }) => {
      let businessUnit: TCompanyGraphql | undefined = undefined;
      let businessUnitRef: TKeyReferenceGraphql | undefined = undefined;
      let customer: TCustomerGraphql | undefined = undefined;
      let customerRef: TReferenceGraphql | undefined = undefined;
      let state: TStateGraphql | undefined = undefined;
      let stateRef: TReferenceGraphql | undefined = undefined;

      const restQuoteRequestRef = buildField(fields.quoteRequest, 'rest');
      const quoteRequestRef: TReferenceGraphql = Reference.presets
        .quoteRequestReference()
        .id(restQuoteRequestRef.id)
        .buildGraphql();
      const quoteRequest = QuoteRequest.random()
        .id(restQuoteRequestRef.id)
        .key(restQuoteRequestRef.obj?.key)
        .buildGraphql<TQuoteRequestGraphql>();

      const restQuotationCartRef = buildField(fields.quotationCart, 'rest');
      const quotationCartRef: TReferenceGraphql = Reference.presets
        .cartReference()
        .id(restQuotationCartRef.id)
        .buildGraphql();
      const quotationCart = Cart.random()
        .id(restQuotationCartRef.id)
        .key(restQuotationCartRef.obj?.key)
        .buildGraphql<TCartGraphql>();

      if (fields.customer) {
        const restCustomerRef = buildField(fields.customer, 'rest');
        customerRef = Reference.presets
          .customerReference()
          .id(restCustomerRef.id)
          .buildGraphql<TReferenceGraphql>();
        customer = Customer.random()
          .id(restCustomerRef.id)
          .firstName(restCustomerRef.obj?.firstName)
          .lastName(restCustomerRef.obj?.lastName)
          .key(restCustomerRef.obj?.key)
          .email(restCustomerRef.obj?.email || '')
          .buildGraphql<TCustomerGraphql>();
      }

      if (fields.businessUnit) {
        const restBusinessUnitRef = buildField(fields.businessUnit, 'rest');
        businessUnitRef = KeyReference.presets
          .businessUnit()
          .key(restBusinessUnitRef.key)
          .buildGraphql<TKeyReferenceGraphql>();
        businessUnit = Company.random()
          .key(restBusinessUnitRef.key)
          .buildGraphql<TCompanyGraphql>();
      }

      if (fields.state) {
        const restStateRef = buildField(fields.state, 'rest');
        stateRef = Reference.presets
          .stateReference()
          .id(restStateRef.id)
          .buildGraphql<TReferenceGraphql>();
        state = State.random()
          .id(restStateRef.id)
          .key(restStateRef.obj?.key || '')
          .type(restStateRef.obj?.type || '')
          .name(
            LocalizedString.presets
              .empty()
              .en(restStateRef.obj?.name?.en)
              .de(restStateRef.obj?.name?.de)
          )
          .buildGraphql<TStateGraphql>();
      }

      return {
        ...fields,
        businessUnit,
        businessUnitRef,
        customer,
        customerRef,
        quotationCart,
        quotationCartRef,
        quoteRequest,
        quoteRequestRef,
        state,
        stateRef,
        __typename: 'StagedQuote',
      };
    },
  }),
};

export default transformers;
