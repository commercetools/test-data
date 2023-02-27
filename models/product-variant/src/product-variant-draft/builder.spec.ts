/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductVariantDraft, TProductVariantDraftGraphql } from '../types';
import * as ProductVariantDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductVariantDraft, TProductVariantDraft>(
      'default',
      ProductVariantDraft.random(),
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
      })
    )
  );

  it(
    ...createBuilderSpec<TProductVariantDraft, TProductVariantDraft>(
      'rest',
      ProductVariantDraft.random(),
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
      })
    )
  );

  it(
    ...createBuilderSpec<TProductVariantDraft, TProductVariantDraftGraphql>(
      'graphql',
      ProductVariantDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        sku: expect.any(String),
        prices: expect.arrayContaining([
          expect.objectContaining({
            value: expect.any(Object),
            __typename: 'ProductPriceDataInput',
          }),
        ]),
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.any(String),
            /**
             * This is not the correct typename, but it saves us from having to create a dummy ImageDraft.
             *
             * TODO: pull in ImageDraft in the generator when it's created
             */
            __typename: 'Image',
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            __typename: 'ProductAttributeInput',
          }),
        ]),
        assets: expect.arrayContaining([]),
        __typename: 'ProductVariantInput',
      })
    )
  );
});
