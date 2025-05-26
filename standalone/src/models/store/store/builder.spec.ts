/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TStore, TStoreGraphql, TStoreRest } from './types';
import { StoreRest, StoreGraphql, Store } from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TStoreRest, TStoreRest>(
      'default',
      StoreRest.random(),
      expect.objectContaining({
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        languages: expect.any(Array),
        countries: expect.any(Array),
        distributionChannels: expect.any(Array),
        supplyChannels: expect.any(Array),
        productSelections: [],
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStore, TStore>(
      'rest',
      Store.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        languages: expect.any(Array),
        countries: expect.any(Array),
        distributionChannels: expect.any(Array),
        supplyChannels: expect.any(Array),
        productSelections: [],
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TStoreGraphql, TStoreGraphql>(
      'graphql',
      StoreGraphql.random(),
      expect.objectContaining({
        __typename: 'Store',
        id: expect.any(String),
        key: expect.any(String),
        languages: expect.any(Array),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
          }),
        ]),
        countries: expect.any(Array),
        productSelections: [],
        distributionChannelsRef: expect.any(Array),
        distributionChannels: expect.any(Array),
        supplyChannelsRef: expect.any(Array),
        supplyChannels: expect.any(Array),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );
});
