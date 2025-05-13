/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../types';
import * as ShippingMethodDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TShippingMethodDraft, TShippingMethodDraft>(
      'default',
      ShippingMethodDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        localizedName: expect.objectContaining({
          en: expect.any(String),
        }),
        localizedDescription: expect.objectContaining({
          en: expect.any(String),
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TShippingMethodDraft, TShippingMethodDraft>(
      'rest',
      ShippingMethodDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        localizedName: expect.objectContaining({
          en: expect.any(String),
        }),
        localizedDescription: expect.objectContaining({
          en: expect.any(String),
        }),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TShippingMethodDraft, TShippingMethodDraftGraphql>(
      'graphql',
      ShippingMethodDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.any(String),
        localizedName: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        localizedDescription: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        taxCategory: expect.objectContaining({
          typeId: 'tax-category',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: expect.any(String),
        custom: null,
      })
    )
  );
});
