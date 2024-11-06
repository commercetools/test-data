import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPinAndBushingKitUsWarehouse preset`, () => {
  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for rest`, () => {
    const skuPinAndBushingKitUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuPinAndBushingKitUsWarehouse()
      .build();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for graphql`, () => {
    const skuPinAndBushingKitUsWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPinAndBushingKitUsWarehouse()
        .build();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for legacy rest`, () => {
    const skuPinAndBushingKitUsWarehousePreset = InventoryEntryDraft.presets
      .skuPinAndBushingKitUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for legacy graphql`, () => {
    const skuPinAndBushingKitUsWarehousePreset = InventoryEntryDraft.presets
      .skuPinAndBushingKitUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot();
  });
});
