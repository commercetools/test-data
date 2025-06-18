import { Company } from '@/models/business-unit';
import { Customer } from '@/models/customer/customer';
import { State } from '@/models/state';
import { recurringOrderState } from './constants';
import { RecurringOrderGraphql } from './index';

describe('RecurringOrder Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurringOrderGraphql.random()
      .customer(Customer.random())
      .customerEmail('test@email.com')
      .businessUnit(Company.random())
      .state(State.random())
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
        skipConfiguration: null,
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
