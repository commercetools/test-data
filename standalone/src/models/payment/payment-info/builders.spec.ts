import { Payment } from '@/models/payment';
import { PaymentInfoRest, PaymentInfoGraphql } from './index';

describe('PaymentInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = PaymentInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        payments: expect.any(Array),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = PaymentInfoGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        payments: expect.any(Array),
        paymentRefs: null,
        __typename: 'PaymentInfo',
      })
    );
  });
  it('should build a customized version of the GraphQL model', () => {
    const payment1 = Payment.random().id('payment-1');
    const payment2 = Payment.random().id('payment-2');
    const graphqlModel = PaymentInfoGraphql.random()
      .payments([payment1, payment2])
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'PaymentInfo',
        payments: [payment1, payment2],
      })
    );
  });
});
