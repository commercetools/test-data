/* eslint-disable jest/valid-title */
/* eslint-disable jest/no-disabled-tests */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TStagedQuote,
  TStagedQuoteRest,
  TStagedQuoteGraphql,
} from './types';
import * as StagedQuote from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStagedQuote, TStagedQuote>(
      'default',
      StagedQuote.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        stagedQuoteState: expect.any(String),
        customer: expect.objectContaining({
          email: expect.any(String),
        }),
        quoteRequest: expect.objectContaining({
          quoteRequestState: expect.any(String),
        }),
        quotationCart: expect.objectContaining({
          cartState: expect.any(String),
        }),
        validTo: expect.any(String),
        sellerComment: expect.any(String),
        state: null,
        purchaseOrderNumber: null,
        businessUnit: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          associateMode: expect.any(String),
        }),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TStagedQuote, TStagedQuoteRest>(
      'rest',
      StagedQuote.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        stagedQuoteState: expect.any(String),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        quoteRequest: expect.objectContaining({
          typeId: 'quote-request',
        }),
        quotationCart: expect.objectContaining({
          typeId: 'cart',
        }),
        validTo: expect.any(String),
        sellerComment: expect.any(String),
        state: undefined,
        purchaseOrderNumber: null,
        businessUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TStagedQuote, TStagedQuoteGraphql>(
      'graphql',
      StagedQuote.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        stagedQuoteState: expect.any(String),
        customer: expect.objectContaining({
          email: expect.any(String),
        }),
        customerRef: expect.objectContaining({
          typeId: 'customer',
          __typename: 'Reference',
        }),
        quoteRequest: expect.objectContaining({
          quoteRequestState: expect.any(String),
        }),
        quoteRequestRef: expect.objectContaining({
          typeId: 'quote-request',
          __typename: 'Reference',
        }),
        quotationCart: expect.objectContaining({
          cartState: expect.any(String),
        }),
        quotationCartRef: expect.objectContaining({
          typeId: 'cart',
          __typename: 'Reference',
        }),
        validTo: expect.any(String),
        sellerComment: expect.any(String),
        state: null,
        stateRef: undefined,
        purchaseOrderNumber: null,
        businessUnit: expect.objectContaining({
          id: expect.any(String),
          key: expect.any(String),
          associateMode: expect.any(String),
        }),
        businessUnitRef: expect.objectContaining({
          typeId: 'business-unit',
          __typename: 'Reference',
        }),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        __typename: 'StagedQuote',
      })
    )
  );
});
