import {
  CategoryOrderHintGraphql,
  CategoryOrderHintRest,
  type TCategoryOrderHintGraphql,
  type TCategoryOrderHintRest,
} from './index';

function validateRestModel(restModel: TCategoryOrderHintRest) {
  expect(restModel).toEqual(
    expect.objectContaining({
      'category-id': '0.5',
    })
  );
}

function validateGraphqlModel(graphqlModel: TCategoryOrderHintGraphql) {
  expect(graphqlModel).toEqual(
    expect.objectContaining({
      __typename: 'CategoryOrderHint',
      categoryId: 'category-id',
      orderHint: '0.5',
    })
  );
}

describe('Product model builders', () => {
  it('builds a REST model', () => {
    const restModel = CategoryOrderHintRest.random()
      .categoryId('category-id')
      .orderHint('0.5')
      .build();

    validateRestModel(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CategoryOrderHintGraphql.random()
      .categoryId('category-id')
      .orderHint('0.5')
      .build();

    validateGraphqlModel(graphqlModel);
  });
});
