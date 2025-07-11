import {
  ShoppingListLineItemDraftRest,
  ShoppingListLineItemDraftGraphql,
} from '../../shopping-list-line-item/shopping-list-line-item-draft';
import {
  TextLineItemDraftRest,
  TextLineItemDraftGraphql,
} from '../../text-line-item/text-line-item-draft';
import { TShoppingListDraftGraphql, TShoppingListDraftRest } from '../types';
import {
  ShoppingListDraft,
  ShoppingListDraftGraphql,
  ShoppingListDraftRest,
} from './index';

const validateRestFields = (model: TShoppingListDraftRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
        fr: expect.any(String),
      }),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          quantity: expect.any(Number),
        }),
      ]),
      textLineItems: expect.arrayContaining([
        expect.objectContaining({
          quantity: expect.any(Number),
        }),
      ]),
    })
  );
};

const validateGraphqlFields = (model: TShoppingListDraftGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      name: expect.arrayContaining([
        expect.objectContaining({
          locale: expect.any(String),
          value: expect.any(String),
        }),
      ]),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          quantity: expect.any(Number),
        }),
      ]),
      textLineItems: expect.arrayContaining([
        expect.objectContaining({
          quantity: expect.any(Number),
        }),
      ]),
    })
  );
};

describe('ShoppingListDraft builder', () => {
  it('should build a valid REST object', () => {
    const ShoppingListDraft = ShoppingListDraftRest.random()
      .lineItems([ShoppingListLineItemDraftRest.random()])
      .textLineItems([TextLineItemDraftRest.random()])
      .build();

    validateRestFields(ShoppingListDraft);
  });

  it('should build a valid GraphQL object', () => {
    const ShoppingListDraft = ShoppingListDraftGraphql.random()
      .lineItems([ShoppingListLineItemDraftGraphql.random()])
      .textLineItems([TextLineItemDraftGraphql.random()])
      .build();

    validateGraphqlFields(ShoppingListDraft);
  });
});

describe('ShoppingListDraft compatibility builder', () => {
  it('should build a valid REST object', () => {
    const shoppingListDraft = ShoppingListDraft.random()
      .lineItems([ShoppingListLineItemDraftRest.random()])
      .textLineItems([TextLineItemDraftRest.random()])
      .buildRest<TShoppingListDraftRest>();

    validateRestFields(shoppingListDraft);
  });

  it('should build a valid Compat GraphQL object', () => {
    const shoppingListDraft = ShoppingListDraft.random()
      .lineItems([ShoppingListLineItemDraftGraphql.random()])
      .textLineItems([TextLineItemDraftGraphql.random()])
      .buildGraphql<TShoppingListDraftGraphql>();

    validateGraphqlFields(shoppingListDraft);
  });
});
