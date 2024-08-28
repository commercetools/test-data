import type { TProductDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyProductDraft = empty().build<TProductDraft>();
  expect(emptyProductDraft.name).toEqual({
    de: expect.any(String),
    en: expect.any(String),
    fr: expect.any(String),
  });
  expect(emptyProductDraft.productType).toEqual({
    id: expect.any(String),
    typeId: expect.any(String),
  });
  expect(emptyProductDraft.slug).toEqual({
    de: expect.any(String),
    en: expect.any(String),
    fr: expect.any(String),
  });
  expect(emptyProductDraft.key).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.description).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.categories).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.categoryOrderHints).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyProductDraft.metaTitle).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.metaDescription).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.metaKeywords).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.masterVariant).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.variants).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.taxCategory).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.state).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.priceMode).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.searchKeywords).toMatchInlineSnapshot(`undefined`);
  expect(emptyProductDraft.publish).toMatchInlineSnapshot(`undefined`);
});
