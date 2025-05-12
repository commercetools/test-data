import { CartDiscountLineItemsTargetDraft } from '../../../cart-discount';
import { DirectDiscountDraftRest, DirectDiscountDraftGraphql } from './index';

describe('DirectDiscountDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DirectDiscountDraftRest.random()
      .target(CartDiscountLineItemsTargetDraft.random())
      .build();

    expect(restModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          type: 'relative',
          permyriad: expect.any(Number),
        }),
        target: expect.objectContaining({
          type: 'lineItems',
          predicate: expect.any(String),
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DirectDiscountDraftGraphql.random()
      .target(CartDiscountLineItemsTargetDraft.random())
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          relative: expect.objectContaining({
            permyriad: expect.any(Number),
          }),
        }),
        target: expect.objectContaining({
          lineItems: expect.objectContaining({
            predicate: expect.any(String),
          }),
        }),
      })
    );
  });
});
