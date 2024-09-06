/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TInventoryEntry,
  TInventoryEntryRest,
  TInventoryEntryGraphql,
} from './types';
import * as InventoryEntry from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TInventoryEntry, TInventoryEntry>(
      'default',
      InventoryEntry.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        sku: expect.any(String),
        availableQuantity: expect.any(Number),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          address: expect.objectContaining({
            country: expect.any(String),
          }),
        }),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TInventoryEntry, TInventoryEntryRest>(
      'rest',
      InventoryEntry.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        availableQuantity: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TInventoryEntry, TInventoryEntryGraphql>(
      'graphql',
      InventoryEntry.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        availableQuantity: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.objectContaining({
          __typename: 'Channel',
          address: expect.objectContaining({
            country: expect.any(String),
          }),
        }),
        supplyChannelRef: expect.objectContaining({
          __typename: 'Reference',
          id: expect.any(String),
          typeId: 'channel',
        }),
        custom: null,
        __typename: 'InventoryEntry',
      })
    )
  );
});

describe('builder without supply channel', () => {
  it(
    ...createBuilderSpec<TInventoryEntry, TInventoryEntryRest>(
      'rest',
      InventoryEntry.random().supplyChannel(null),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        availableQuantity: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: undefined,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TInventoryEntry, TInventoryEntryGraphql>(
      'graphql',
      InventoryEntry.random().supplyChannel(null),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        availableQuantity: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: null,
        supplyChannelRef: undefined,
        custom: null,
        __typename: 'InventoryEntry',
      })
    )
  );
});
