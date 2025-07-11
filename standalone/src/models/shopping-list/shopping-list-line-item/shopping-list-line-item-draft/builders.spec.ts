import { CustomFieldBooleanType } from '@/models/type';
import {
  TShoppingListLineItemDraftGraphql,
  TShoppingListLineItemDraftRest,
} from '../types';
import {
  ShoppingListLineItemDraftRest,
  ShoppingListLineItemDraftGraphql,
} from './index';

const validateCommonFields = (
  model: TShoppingListLineItemDraftRest | TShoppingListLineItemDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      productId: expect.any(String),
      quantity: expect.any(Number),
      variantId: expect.any(Number),
    })
  );
};

const validateRestFields = (model: TShoppingListLineItemDraftRest) => {
  validateCommonFields(model);
};

const validateGraphqlFields = (model: TShoppingListLineItemDraftGraphql) => {
  validateCommonFields(model);
  expect(model).toEqual(
    expect.objectContaining({
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
    })
  );
};

describe('LineItemDraft model builders', () => {
  it('builds a REST model', () => {
    const lineItemDraft = ShoppingListLineItemDraftRest.random()
      .custom(CustomFieldBooleanType.random())
      .build();
    validateRestFields(lineItemDraft);
  });

  it('builds a GraphQL model', () => {
    const lineItemDraft = ShoppingListLineItemDraftGraphql.random()
      .custom(CustomFieldBooleanType.random())
      .build();
    validateGraphqlFields(lineItemDraft);
  });
});
