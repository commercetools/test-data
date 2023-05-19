/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../types';
import * as ProductVariantDraft from './index';

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
            dimensions: expect.objectContaining({
              w: expect.any(Number),
              h: expect.any(Number),
            }),
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
            dimensions: expect.objectContaining({
              w: expect.any(Number),
              h: expect.any(Number),
            }),
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
            value: {
              centPrecision: expect.any(Object),
            },
          }),
        ]),
        images: expect.arrayContaining([
          expect.objectContaining({
            label: expect.any(String),
            url: expect.any(String),
            dimensions: expect.objectContaining({
              width: expect.any(Number),
              height: expect.any(Number),
            }),
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
});
