import {
  InventoryEntryRest,
  InventoryEntryGraphql,
  deprecatedInventoryEntry,
} from './index';

describe('InventoryEntry Builder', () => {
  it('should build properties for the inventory entry REST representation', () => {
    const restModel = InventoryEntryRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.any(Object),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.any(Object),
        sku: expect.any(String),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        availableQuantity: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: expect.any(Object),
        custom: null,
      })
    );
  });

  it('should build properties for the inventory entry GraphQL representation', () => {
    const graphqlModel = InventoryEntryGraphql.random().build();

    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.any(Object),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.any(Object),
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
    );
  });

  it('should build properties for the deprecated inventory entry representation', () => {
    const model = deprecatedInventoryEntry.random().build();

    expect(model).toMatchObject(
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.any(Object),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.any(Object),
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
    );
  });
});
