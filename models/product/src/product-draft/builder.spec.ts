/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDraft, TProductDraftGraphql } from '../types';
import * as ProductDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDraft, TProductDraft>(
      'default',
      ProductDraft.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        categories: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'categories',
          }),
        ]),
        categoryOrderHints: null,
        masterVariant: expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          prices: expect.arrayContaining([
            expect.objectContaining({
              value: expect.any(Object),
            }),
          ]),
          images: expect.arrayContaining([
            expect.objectContaining({
              url: expect.any(String),
            }),
          ]),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
          assets: expect.arrayContaining([]),
        }),
        variants: expect.arrayContaining([
          expect.objectContaining({
            key: expect.any(String),
            sku: expect.any(String),
            prices: expect.arrayContaining([
              expect.objectContaining({
                value: expect.any(Object),
              }),
            ]),
            images: expect.arrayContaining([
              expect.objectContaining({
                url: expect.any(String),
              }),
            ]),
            attributes: expect.arrayContaining([
              expect.objectContaining({
                name: expect.any(String),
              }),
            ]),
            assets: expect.arrayContaining([]),
          }),
        ]),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        searchKeywords: null,
        metaTitle: null,
        metaDescription: null,
        metaKeywords: null,
        publish: expect.any(Boolean),
        key: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductDraft, TProductDraft>(
      'rest',
      ProductDraft.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        categories: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'categories',
          }),
        ]),
        categoryOrderHints: null,
        masterVariant: expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          prices: expect.arrayContaining([
            expect.objectContaining({
              value: expect.any(Object),
            }),
          ]),
          images: expect.arrayContaining([
            expect.objectContaining({
              url: expect.any(String),
            }),
          ]),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
          assets: expect.arrayContaining([]),
        }),
        variants: expect.arrayContaining([
          expect.objectContaining({
            key: expect.any(String),
            sku: expect.any(String),
            prices: expect.arrayContaining([
              expect.objectContaining({
                value: expect.any(Object),
              }),
            ]),
            images: expect.arrayContaining([
              expect.objectContaining({
                url: expect.any(String),
              }),
            ]),
            attributes: expect.arrayContaining([
              expect.objectContaining({
                name: expect.any(String),
              }),
            ]),
            assets: expect.arrayContaining([]),
          }),
        ]),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        searchKeywords: null,
        metaTitle: null,
        metaDescription: null,
        metaKeywords: null,
        publish: expect.any(Boolean),
        key: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TProductDraft, TProductDraftGraphql>(
      'graphql',
      ProductDraft.random(),
      expect.objectContaining({
        name: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        slug: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        categories: expect.arrayContaining([
          expect.objectContaining({
            typeId: 'categories',
          }),
        ]),
        categoryOrderHints: null,
        masterVariant: expect.objectContaining({
          key: expect.any(String),
          sku: expect.any(String),
          prices: expect.arrayContaining([
            expect.objectContaining({
              value: expect.any(Object),
            }),
          ]),
          images: expect.arrayContaining([
            expect.objectContaining({
              url: expect.any(String),
            }),
          ]),
          attributes: expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ]),
          assets: expect.arrayContaining([]),
          __typename: 'ProductVariantInput',
        }),
        variants: expect.arrayContaining([
          expect.objectContaining({
            key: expect.any(String),
            sku: expect.any(String),
            prices: expect.arrayContaining([
              expect.objectContaining({
                value: expect.any(Object),
              }),
            ]),
            images: expect.arrayContaining([
              expect.objectContaining({
                url: expect.any(String),
              }),
            ]),
            attributes: expect.arrayContaining([
              expect.objectContaining({
                name: expect.any(String),
              }),
            ]),
            assets: expect.arrayContaining([]),
          }),
        ]),
        state: expect.objectContaining({
          typeId: 'state',
        }),
        productType: expect.objectContaining({
          typeId: 'product-type',
        }),
        searchKeywords: null,
        metaTitle: null,
        metaDescription: null,
        metaKeywords: null,
        publish: expect.any(Boolean),
        key: expect.any(String),
        __typename: 'ProductDraft',
      })
    )
  );
});
