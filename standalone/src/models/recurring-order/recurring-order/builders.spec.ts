import { Company } from '@/models/business-unit';
import { KeyReference, ReferenceRest } from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import { StateGraphql } from '@/models/state';
import { CounterGraphql, CounterRest } from '../index';
import { recurringOrderState } from './constants';
import { RecurringOrderGraphql, RecurringOrderRest } from './index';

describe('RecurringOrder Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = RecurringOrderRest.random()
      .customer(ReferenceRest.presets.customerReference())
      .customerEmail('test@email.com')
      .businessUnit(KeyReference.presets.businessUnit())
      .state(ReferenceRest.presets.stateReference())
      .skipConfiguration(CounterRest.random())
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: null,
        startsAt: expect.any(String),
        resumesAt: null,
        expiresAt: null,
        lastOrderAt: null,
        nextOrderAt: null,
        skipConfiguration: expect.objectContaining({
          type: 'counter',
          totalToSkip: expect.any(Number),
        }),
        businessUnit: expect.objectContaining({
          key: expect.any(String),
          typeId: 'business-unit',
        }),
        state: expect.objectContaining({
          id: expect.any(String),
          typeId: 'state',
        }),
        recurringOrderState: expect.toBeOneOf(
          Object.values(recurringOrderState)
        ),
        customer: expect.objectContaining({
          id: expect.any(String),
          typeId: 'customer',
        }),
        customerEmail: 'test@email.com',
        custom: null,
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        store: null,
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurringOrderGraphql.random()
      .customer(Customer.random())
      .customerEmail('test@email.com')
      .businessUnit(Company.random())
      .state(StateGraphql.random())
      .skipConfiguration(CounterGraphql.random())
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        key: null,
        version: expect.any(Number),
        startsAt: expect.any(String),
        resumesAt: null,
        expiresAt: null,
        lastOrderAt: null,
        nextOrderAt: null,
        skipConfiguration: expect.objectContaining({
          type: 'counter',
          totalToSkip: expect.any(Number),
          skipped: expect.any(Number),
          lastSkippedAt: null,
          __typename: 'Counter',
        }),
        businessUnit: expect.objectContaining({
          __typename: 'BusinessUnit',
        }),
        businessUnitRef: expect.objectContaining({
          __typename: 'Reference',
        }),
        state: expect.objectContaining({
          __typename: 'State',
        }),
        stateRef: expect.objectContaining({
          __typename: 'Reference',
        }),
        recurringOrderState: expect.toBeOneOf(
          Object.values(recurringOrderState)
        ),
        customer: expect.objectContaining({
          __typename: 'Customer',
        }),
        customerRef: expect.objectContaining({
          __typename: 'Reference',
        }),
        customerEmail: 'test@email.com',
        cart: expect.objectContaining({
          __typename: 'Cart',
        }),
        cartRef: expect.objectContaining({
          __typename: 'Reference',
        }),
        originOrder: expect.objectContaining({
          __typename: 'Order',
        }),
        originOrderRef: expect.objectContaining({
          __typename: 'Reference',
        }),
        __typename: 'RecurringOrder',
      })
    );
  });
});
