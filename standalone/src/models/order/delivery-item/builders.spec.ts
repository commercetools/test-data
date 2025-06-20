import type { TDeliveryItemRest, TDeliveryItemGraphql } from './types';
import { DeliveryItem, DeliveryItemGraphql, DeliveryItemRest } from './index';

const validateModel = (
  model: TDeliveryItemRest | TDeliveryItemGraphql,
  options?: {
    id?: string | null;
    quantity?: number | null;
  }
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: options?.id || expect.any(String),
      quantity: options?.quantity || expect.any(Number),
    })
  );
};

describe('DeliveryItem model builders', () => {
  it('builds a REST model', () => {
    const restModel = DeliveryItemRest.random().build();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = DeliveryItemRest.random()
      .id('DI-12345')
      .quantity(5)
      .build();

    validateModel(restModel, {
      id: 'DI-12345',
      quantity: 5,
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = DeliveryItemGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'DeliveryItem',
      })
    );
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = DeliveryItemGraphql.random()
      .id('DI-12345')
      .quantity(10)
      .build();

    validateModel(graphqlModel, {
      id: 'DI-12345',
      quantity: 10,
    });
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'DeliveryItem',
      })
    );
  });
});

describe('DeliveryItem model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = DeliveryItem.random().buildRest();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = DeliveryItem.random()
      .id('DI-12345')
      .quantity(3)
      .buildRest();

    validateModel(restModel, {
      id: 'DI-12345',
      quantity: 3,
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = DeliveryItem.random().buildGraphql();
    validateModel(graphqlModel);
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'DeliveryItem',
      })
    );
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = DeliveryItem.random()
      .id('DI-12345')
      .quantity(7)
      .buildGraphql();

    validateModel(graphqlModel, {
      id: 'DI-12345',
      quantity: 7,
    });
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'DeliveryItem',
      })
    );
  });
});
