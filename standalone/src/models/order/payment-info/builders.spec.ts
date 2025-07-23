import { ReferenceRest } from '@/models/commons';
import { Payment } from '@/models/payment';
import { PaymentInfoRest, PaymentInfoGraphql } from './index';

describe('PaymentInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = PaymentInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        payments: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            typeId: 'payment',
            obj: expect.objectContaining({
              id: expect.any(String),
            }),
          }),
        ]),
      })
    );
  });

  it('should link payment ID for the REST representation', () => {
    const restModel = PaymentInfoRest.random()
      .payments([ReferenceRest.presets.paymentReference().id('payment-1')])
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        payments: expect.arrayContaining([
          expect.objectContaining({
            id: 'payment-1',
            typeId: 'payment',
            obj: expect.objectContaining({
              id: 'payment-1',
            }),
          }),
        ]),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = PaymentInfoGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        payments: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'Payment',
          }),
        ]),
        paymentRefs: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'payment',
            __typename: 'Reference',
          }),
        ]),
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
        payments: expect.arrayContaining([
          expect.objectContaining({
            id: 'payment-1',
            __typename: 'Payment',
          }),
          expect.objectContaining({
            id: 'payment-2',
            __typename: 'Payment',
          }),
        ]),
        paymentRefs: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'payment',
            id: 'payment-1',
            __typename: 'Reference',
          }),
          expect.objectContaining({
            typeId: 'payment',
            id: 'payment-2',
            __typename: 'Reference',
          }),
        ]),
        __typename: 'PaymentInfo',
      })
    );
  });
});
