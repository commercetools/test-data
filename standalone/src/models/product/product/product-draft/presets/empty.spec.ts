import {
  TProductDraft,
  TProductDraftGraphql,
  TProductDraftRest,
} from '../../types';
import * as empty from './empty';

function validateModel(
  model: TProductDraft | TProductDraftRest | TProductDraftGraphql
) {
  expect(model.key).toMatchInlineSnapshot(`undefined`);
  expect(model.description).toMatchInlineSnapshot(`undefined`);
  expect(model.categories).toMatchInlineSnapshot(`undefined`);
  expect(model.categoryOrderHints).toMatchInlineSnapshot(`undefined`);
  expect(model.metaTitle).toMatchInlineSnapshot(`undefined`);
  expect(model.metaDescription).toMatchInlineSnapshot(`undefined`);
  expect(model.metaKeywords).toMatchInlineSnapshot(`undefined`);
  expect(model.masterVariant).toMatchInlineSnapshot(`undefined`);
  expect(model.variants).toMatchInlineSnapshot(`undefined`);
  expect(model.taxCategory).toMatchInlineSnapshot(`undefined`);
  expect(model.state).toMatchInlineSnapshot(`undefined`);
  expect(model.priceMode).toMatchInlineSnapshot(`undefined`);
  expect(model.searchKeywords).toMatchInlineSnapshot(`undefined`);
  expect(model.publish).toMatchInlineSnapshot(`undefined`);
}

function validateRestModel(model: TProductDraftRest | TProductDraft) {
  validateModel(model);
  expect(model.name).toEqual({
    de: expect.any(String),
    en: expect.any(String),
    fr: expect.any(String),
  });
  expect(model.productType).toEqual({
    id: expect.any(String),
    typeId: expect.any(String),
    obj: expect.any(Object),
  });
  expect(model.slug).toEqual({
    de: expect.any(String),
    en: expect.any(String),
    fr: expect.any(String),
  });
}

function validateGraphqlModel(model: TProductDraftGraphql) {
  validateModel(model);
  expect(model.name).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        locale: expect.any(String),
        value: expect.any(String),
      }),
    ])
  );
  expect(model.productType).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      typeId: expect.any(String),
    })
  );
  expect(model.slug).toEqual(
    expect.arrayContaining([
      {
        locale: expect.any(String),
        value: expect.any(String),
      },
    ])
  );
}

describe('ProectDraft empty preset', () => {
  it(`should build a rest model`, () => {
    const restModel = empty.restPreset().build();
    validateRestModel(restModel);
  });

  it(`should build a graphql model`, () => {
    const graphqlModel = empty.graphqlPreset().build();
    validateGraphqlModel(graphqlModel);
  });

  it('should build a compatibility model', () => {
    const compatModel = empty.compatPreset().build();
    validateRestModel(compatModel);
  });
});
