import type {
  TCompanyGraphql,
  TDivisionGraphql} from '@commercetools-test-data/business-unit';
import {
  Company
} from '@commercetools-test-data/business-unit';
import type { TCartGraphql } from '@commercetools-test-data/cart';
import { Cart } from '@commercetools-test-data/cart';
import type {
  TReferenceGraphql,
  TKeyReferenceGraphql} from '@commercetools-test-data/commons';
import {
  Reference,
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';

import type { TCustomerGraphql } from '@commercetools-test-data/customer';
import { Customer } from '@commercetools-test-data/customer';
import type {
  TCustomerGroupGraphql} from '@commercetools-test-data/customer-group';
import {
  CustomerGroup
} from '@commercetools-test-data/customer-group';
import type { TStateGraphql } from '@commercetools-test-data/state';
import { State } from '@commercetools-test-data/state';
import type { TStoreGraphql } from '@commercetools-test-data/store';
import { Store } from '@commercetools-test-data/store';
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
  }),
  graphql: Transformer<TQuoteRequest, TQuoteRequestGraphql>('graphql', {
    buildFields: [
      'lineItems',
      'totalPrice',
      'shippingAddress',
      'billingAddress',
      'itemShippingAddresses',
      'custom',
      'createdBy',
      'lastModifiedBy',
    ],
    replaceFields: ({ fields }) => {
      let businessUnit: TCompanyGraphql | TDivisionGraphql | undefined =
        undefined;
      let businessUnitRef: TKeyReferenceGraphql | undefined = undefined;
      let cart: TCartGraphql | undefined = undefined;
      let cartRef: TReferenceGraphql | undefined = undefined;
      let customerGroup: TCustomerGroupGraphql | undefined = undefined;
      let customerGroupRef: TReferenceGraphql | undefined = undefined;
      let state: TStateGraphql | undefined = undefined;
      let stateRef: TReferenceGraphql | undefined = undefined;
      let store: TStoreGraphql | undefined = undefined;
      let storeRef: TKeyReferenceGraphql | undefined = undefined;

      const restCustomerRef = buildField(fields.customer, 'rest');
      const customerRef = Reference.presets
        .customerReference()
        .id(restCustomerRef.id)
        .buildGraphql<TReferenceGraphql>();
      const customer = Customer.random()
        .id(restCustomerRef.id)
        .firstName(restCustomerRef.obj?.firstName)
        .lastName(restCustomerRef.obj?.lastName)
        .key(restCustomerRef.obj?.key)
        .email(restCustomerRef.obj?.email || '')
        .buildGraphql<TCustomerGraphql>();

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

      if (fields.cart) {
        const restCartRef = buildField(fields.cart, 'rest');
        cartRef = Reference.presets
          .cartReference()
          .id(fields.cart.id)
          .buildGraphql<TReferenceGraphql>();
        cart = Cart.random()
          .id(restCartRef.id)
          .key(restCartRef.obj?.key)
          .customerId(restCartRef.obj?.customerId)
          .customerEmail(restCartRef.obj?.customerEmail)
          .buildGraphql<TCartGraphql>();
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
          .buildGraphql<TStoreGraphql>();
      }

      return {
        ...fields,
        customer,
        customerRef,
        customerGroup,
        customerGroupRef,
        store,
        storeRef,
        state,
        stateRef,
        cart,
        cartRef,
        businessUnit,
        businessUnitRef,
        __typename: 'QuoteRequest',
      };
    },
  }),
};

export default transformers;
