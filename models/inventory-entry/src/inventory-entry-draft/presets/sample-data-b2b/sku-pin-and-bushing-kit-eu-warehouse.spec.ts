import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPinAndBushingKitEuWarehouse preset`, () => {
  it(`should return a skuPinAndBushingKitEuWarehouse preset when built for rest`, () => {
    const skuPinAndBushingKitEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuPinAndBushingKitEuWarehouse()
      .build();
    expect(skuPinAndBushingKitEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitEuWarehouse preset when built for graphql`, () => {
    const skuPinAndBushingKitEuWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPinAndBushingKitEuWarehouse()
        .build();
    expect(skuPinAndBushingKitEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitEuWarehouse preset when built for legacy rest`, () => {
    const skuPinAndBushingKitEuWarehousePreset = InventoryEntryDraft.presets
      .skuPinAndBushingKitEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPinAndBushingKitEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPinAndBushingKitEuWarehouse preset when built for legacy graphql`, () => {
    const skuPinAndBushingKitEuWarehousePreset = InventoryEntryDraft.presets
      .skuPinAndBushingKitEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPinAndBushingKitEuWarehousePreset).toMatchInlineSnapshot();
  });
});
