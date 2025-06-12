import { Company } from '@/models/business-unit';
import { Customer } from '../../../customer';
import { State } from '../../../state';
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
          id: expect.any(String),
          unitType: 'Company',
          __typename: 'BusinessUnit',
        }),
        businessUnitRef: expect.objectContaining({
          typeId: 'business-unit',
          key: expect.any(String),
          __typename: 'Reference',
        }),
        state: expect.objectContaining({
          id: expect.any(String),
          __typename: 'State',
        }),
        stateRef: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Reference',
        }),
        recurringOrderState: expect.toBeOneOf(
          Object.values(recurringOrderState)
        ),
        customer: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Customer',
        }),
        customerRef: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Reference',
        }),
        customerEmail: 'test@email.com',
        cart: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Cart',
        }),
        cartRef: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Reference',
        }),
        originOrder: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Order',
        }),
        originOrderRef: expect.objectContaining({
          id: expect.any(String),
          __typename: 'Reference',
        }),
        __typename: 'RecurringOrder',
      })
    );
  });
});
