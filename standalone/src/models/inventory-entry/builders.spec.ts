import {
  InventoryEntry,
  InventoryEntryRest,
  InventoryEntryGraphql,
} from './index';

describe('InventoryEntry model builders', () => {
  it('builds a REST model', () => {
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
        supplyChannel: null,
        custom: null,
      })
    );
  });

  it('builds a GraphQL model', () => {
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
        supplyChannel: null,
        supplyChannelRef: null,
        custom: null,
        __typename: 'InventoryEntry',
      })
    );
  });
});

describe('InventoryEntry model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = InventoryEntry.random().buildRest();

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
        supplyChannel: null,
        custom: null,
      })
    );
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = InventoryEntry.random().buildGraphql();

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
        availableQuantity: expect.any(Number),
        quantityOnStock: expect.any(Number),
        restockableInDays: expect.any(Number),
        expectedDelivery: expect.any(String),
        supplyChannel: null,
        supplyChannelRef: null,
        custom: null,
      })
    );
  });
});
