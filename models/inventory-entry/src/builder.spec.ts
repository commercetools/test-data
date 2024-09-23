/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { Channel } from '@commercetools-test-data/channel';
import { Reference } from '@commercetools-test-data/commons';
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
          id: expect.any(String),
          typeId: 'channel',
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

  describe('when customizing the model', () => {
    const inventoryEntryMock = InventoryEntry.random()
      .id('entry-id')
      .key('entry-key')
      .quantityOnStock(11)
      .availableQuantity(10)
      .restockableInDays(5)
      .expectedDelivery('2024-01-01')
      .sku('entry-sku')
      .supplyChannel(
        Reference.presets
          .channelReference()
          .obj(Channel.presets.foodStore().id('food-store-id'))
      )
      .version(123);

    it('should build the right rest model', () => {
      const restInventoryEntry =
        inventoryEntryMock.buildRest<TInventoryEntryRest>();

      expect(restInventoryEntry).toEqual(
        expect.objectContaining({
          id: 'entry-id',
          key: 'entry-key',
          quantityOnStock: 11,
          availableQuantity: 10,
          restockableInDays: 5,
          expectedDelivery: '2024-01-01',
          sku: 'entry-sku',
          supplyChannel: expect.objectContaining({
            id: 'food-store-id',
            typeId: 'channel',
            obj: expect.objectContaining({
              key: 'food-store-key',
              name: expect.objectContaining({
                en: 'Food Store',
              }),
            }),
          }),
          version: 123,
        })
      );
    });

    it('should build the right graphql model', () => {
      const graphqlInventoryEntry =
        inventoryEntryMock.buildGraphql<TInventoryEntryGraphql>();

      expect(graphqlInventoryEntry).toEqual(
        expect.objectContaining({
          id: 'entry-id',
          key: 'entry-key',
          quantityOnStock: 11,
          availableQuantity: 10,
          restockableInDays: 5,
          expectedDelivery: '2024-01-01',
          sku: 'entry-sku',
          supplyChannel: expect.objectContaining({
            id: 'food-store-id',
            key: 'food-store-key',
            name: 'Food Store',
            nameAllLocales: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en',
                value: 'Food Store',
              }),
            ]),
          }),
          supplyChannelRef: expect.objectContaining({
            id: 'food-store-id',
            typeId: 'channel',
            __typename: 'Reference',
          }),
          version: 123,
        })
      );
    });
  });
});
