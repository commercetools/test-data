import {
  TShoppingList,
  TShoppingListRest,
  TShoppingListGraphql,
} from '../types';
import { compatPreset, graphqlPreset, restPreset } from './with-all-fields';

const validateRestFields = (model: TShoppingListRest) => {
  expect(model).toMatchObject(
    expect.objectContaining({
      anonymousId: expect.any(String),
      key: expect.any(String),
      lineItems: expect.arrayContaining([expect.any(Object)]),
      textLineItems: expect.arrayContaining([expect.any(Object)]),
      businessUnit: expect.objectContaining({
        key: expect.any(String),
      }),
      custom: expect.objectContaining({
        name: 'Boolean',
      }),
      customer: expect.objectContaining({
        id: expect.any(String),
      }),
      name: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
      }),
      description: expect.objectContaining({
        en: expect.any(String),
        de: expect.any(String),
      }),
      slug: expect.objectContaining({
        en: expect.any(String),
      }),
      store: expect.objectContaining({
        key: expect.any(String),
      }),
    })
  );
};

const validateGraphqlFields = (model: TShoppingListGraphql) => {
  expect(model).toMatchObject(
    expect.objectContaining({
      anonymousId: expect.any(String),
      key: expect.any(String),
      businessUnit: expect.objectContaining({
        key: expect.any(String),
      }),
      businessUnitRef: expect.objectContaining({
        key: expect.any(String),
      }),
      custom: expect.objectContaining({
        __typename: 'BooleanType',
      }),
      customer: expect.objectContaining({
        id: expect.any(String),
      }),
      customerRef: expect.objectContaining({
        id: expect.any(String),
      }),
      lineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
      store: expect.objectContaining({
        key: expect.any(String),
      }),
      storeRef: expect.objectContaining({
        key: expect.any(String),
      }),
      textLineItems: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          quantity: expect.any(Number),
        }),
      ]),
      __typename: 'ShoppingList',
    })
  );
};

describe('ShoppingList with all fields', () => {
  describe('ShoppingList model builders', () => {
    it('builds a REST model', () => {
      const restModelFromPreset = restPreset().build();
      validateRestFields(restModelFromPreset);
    });

    it('builds a GraphQL model', () => {
      const graphqlModelFromPreset = graphqlPreset().build();
      validateGraphqlFields(graphqlModelFromPreset);
    });
  });

  describe('ShoppingList compatibility builder', () => {
    it('builds a DEFAULT model', () => {
      const compatDefaultModelFromPreset =
        compatPreset().build<TShoppingList>();
      validateRestFields(compatDefaultModelFromPreset);
    });

    it('builds a REST model', () => {
      const compatRestModelFromPreset =
        compatPreset().buildRest<TShoppingListRest>();
      validateRestFields(compatRestModelFromPreset);
    });

    it('builds a GraphQL model', () => {
      const compatGraphqlPresetFromPreset =
        compatPreset().buildGraphql<TShoppingListGraphql>();
      validateGraphqlFields(compatGraphqlPresetFromPreset);
    });
  });
});
