import {
  CartDiscountPatternTargetRest,
  CartDiscountPatternTargetGraphql,
} from './index';

describe('CartDiscountPatternTarget Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = CartDiscountPatternTargetRest.random().build();

    console.log(JSON.stringify(restModel));
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = CartDiscountPatternTargetGraphql.random().build();
    console.log(JSON.stringify(graphqlModel));
  });
});
