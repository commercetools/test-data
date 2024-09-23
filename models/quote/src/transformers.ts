import {
  Company,
  TCompanyGraphql,
  TDivisionGraphql,
} from '@commercetools-test-data/business-unit';
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
  CustomerGroup,
  TCustomerGroupGraphql,
} from '@commercetools-test-data/customer-group';
import {
  QuoteRequest,
  TQuoteRequestGraphql,
} from '@commercetools-test-data/quote-request';
import {
  StagedQuote,
  TStagedQuoteGraphql,
} from '@commercetools-test-data/staged-quote';
import { State, TStateGraphql } from '@commercetools-test-data/state';
import { Store } from '@commercetools-test-data/store';
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
  }),
  graphql: Transformer<TQuote, TQuoteGraphql>('graphql', {
    buildFields: [
      'lineItems',
      'customLineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'directDiscounts',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    replaceFields: ({ fields }) => {
      let businessUnit: TCompanyGraphql | TDivisionGraphql | undefined =
        undefined;
      let businessUnitRef: TKeyReferenceGraphql | undefined = undefined;
      let customer: TCustomerGraphql | undefined = undefined;
      let customerRef: TReferenceGraphql | undefined = undefined;
      let customerGroup: TCustomerGroupGraphql | undefined = undefined;
      let customerGroupRef: TReferenceGraphql | undefined = undefined;
      let state: TStateGraphql | undefined = undefined;
      let stateRef: TReferenceGraphql | undefined = undefined;
      let store: TReferenceGraphql | undefined = undefined;
      let storeRef: TKeyReferenceGraphql | undefined = undefined;

      const restQuoteRequestRef = buildField(fields.quoteRequest, 'rest');
      const quoteRequestRef: TReferenceGraphql = Reference.presets
        .quoteRequestReference()
        .id(restQuoteRequestRef.id)
        .buildGraphql();
      const quoteRequest = QuoteRequest.random()
        .id(restQuoteRequestRef.id)
        .key(restQuoteRequestRef.obj?.key)
        .buildGraphql<TQuoteRequestGraphql>();

      const restStagedQuoteRef = buildField(fields.stagedQuote, 'rest');
      const stagedQuoteRef: TReferenceGraphql = Reference.presets
        .stagedQuoteReference()
        .id(restStagedQuoteRef.id)
        .buildGraphql();
      const stagedQuote = StagedQuote.random()
        .id(restStagedQuoteRef.id)
        .key(restStagedQuoteRef.obj?.key)
        .buildGraphql<TStagedQuoteGraphql>();

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

      if (fields.customerGroup) {
        const restCustomerGroupRef = buildField(fields.customerGroup, 'rest');
        customerGroupRef = Reference.presets
          .customerGroupReference()
          .id(restCustomerGroupRef.id)
          .buildGraphql<TReferenceGraphql>();
        customerGroup = CustomerGroup.random()
          .id(restCustomerGroupRef.id)
          .key(restCustomerGroupRef.obj?.key)
          .buildGraphql<TCustomerGroupGraphql>();
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

      if (fields.store) {
        const restStoreRef = buildField(fields.store, 'rest');
        storeRef = KeyReference.presets
          .store()
          .key(restStoreRef.key)
          .buildGraphql<TKeyReferenceGraphql>();
        store = Store.random()
          .key(restStoreRef.key)
          .buildGraphql<TReferenceGraphql>();
      }

      return {
        ...fields,
        quoteRequest,
        quoteRequestRef,
        stagedQuote,
        stagedQuoteRef,
        customer,
        customerRef,
        customerGroup,
        customerGroupRef,
        state,
        stateRef,
        store,
        storeRef,
        businessUnit,
        businessUnitRef,
        __typename: 'Quote',
      };
    },
  }),
};

export default transformers;
