import type { TProductTailoringGraphql, TProductTailoringRest } from '../types';
import { restPresets, graphqlPresets } from './';

const restExpectation = (productTailoring: TProductTailoringRest) => {
  expect(productTailoring).toMatchObject({
    key: 'tailored-product-key',
    published: true,
    hasStagedChanges: false,
    current: {
      name: {
        en: 'Tailored Product',
        de: 'Angepasstes Produkt',
      },
      description: {
        en: 'Product tailored for specific market',
        de: 'Produkt für spezifischen Markt angepasst',
      },
      metaTitle: {
        en: 'Tailored Product - Meta Title',
        de: 'Angepasstes Produkt - Meta Titel',
      },
      metaDescription: {
        en: 'Meta description for tailored product',
        de: 'Meta-Beschreibung für angepasstes Produkt',
      },
      metaKeywords: {
        en: 'tailored, product, market',
        de: 'angepasst, produkt, markt',
      },
      slug: {
        en: 'tailored-product',
        de: 'angepasstes-produkt',
      },
    },
    staged: {
      name: {
        en: 'Tailored Product',
        de: 'Angepasstes Produkt',
      },
      description: {
        en: 'Product tailored for specific market',
        de: 'Produkt für spezifischen Markt angepasst',
      },
      metaTitle: {
        en: 'Tailored Product - Meta Title',
        de: 'Angepasstes Produkt - Meta Titel',
      },
      metaDescription: {
        en: 'Meta description for tailored product',
        de: 'Meta-Beschreibung für angepasstes Produkt',
      },
      metaKeywords: {
        en: 'tailored, product, market',
        de: 'angepasst, produkt, markt',
      },
      slug: {
        en: 'tailored-product',
        de: 'angepasstes-produkt',
      },
    },
  });
};

const graphqlExpectation = (productTailoring: TProductTailoringGraphql) => {
  expect(productTailoring).toMatchObject({
    key: 'tailored-product-key',
    published: true,
    hasStagedChanges: false,
    current: {
      name: 'Tailored Product',
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Tailored Product',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Angepasstes Produkt',
        }),
      ]),
      description: 'Product tailored for specific market',
      descriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Product tailored for specific market',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Produkt für spezifischen Markt angepasst',
        }),
      ]),
      metaTitle: 'Tailored Product - Meta Title',
      metaTitleAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Tailored Product - Meta Title',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Angepasstes Produkt - Meta Titel',
        }),
      ]),
      metaDescription: 'Meta description for tailored product',
      metaDescriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Meta description for tailored product',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Meta-Beschreibung für angepasstes Produkt',
        }),
      ]),
      metaKeywords: 'tailored, product, market',
      metaKeywordsAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'tailored, product, market',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'angepasst, produkt, markt',
        }),
      ]),
      slug: 'tailored-product',
      slugAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'tailored-product',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'angepasstes-produkt',
        }),
      ]),
    },
    staged: {
      name: 'Tailored Product',
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Tailored Product',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Angepasstes Produkt',
        }),
      ]),
      description: 'Product tailored for specific market',
      descriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Product tailored for specific market',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Produkt für spezifischen Markt angepasst',
        }),
      ]),
      metaTitle: 'Tailored Product - Meta Title',
      metaTitleAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Tailored Product - Meta Title',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Angepasstes Produkt - Meta Titel',
        }),
      ]),
      metaDescription: 'Meta description for tailored product',
      metaDescriptionAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'Meta description for tailored product',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'Meta-Beschreibung für angepasstes Produkt',
        }),
      ]),
      metaKeywords: 'tailored, product, market',
      metaKeywordsAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'tailored, product, market',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'angepasst, produkt, markt',
        }),
      ]),
      slug: 'tailored-product',
      slugAllLocales: expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'tailored-product',
        }),
        expect.objectContaining({
          locale: 'de',
          value: 'angepasstes-produkt',
        }),
      ]),
    },
    __typename: 'ProductTailoring',
  });
};

describe('Product Tailoring presets', () => {
  describe('basic preset', () => {
    it('[REST] should set all specified fields correctly', () => {
      const productTailoring = restPresets.basic().build();
      restExpectation(productTailoring);
    });

    it('[GraphQL] should set all specified fields correctly', () => {
      const productTailoring = graphqlPresets.basic().build();
      graphqlExpectation(productTailoring);
    });
  });
});
