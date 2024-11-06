import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPinAndBushingKitDefaultWarehouse preset`, () => {
  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for rest`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuPinAndBushingKitDefaultWarehouse()
        .build();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for graphql`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPinAndBushingKitDefaultWarehouse()
        .build();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for legacy rest`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset =
      InventoryEntryDraft.presets
        .skuPinAndBushingKitDefaultWarehouse()
        .buildRest<TInventoryEntryDraftRest>();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset =
      InventoryEntryDraft.presets
        .skuPinAndBushingKitDefaultWarehouse()
        .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
