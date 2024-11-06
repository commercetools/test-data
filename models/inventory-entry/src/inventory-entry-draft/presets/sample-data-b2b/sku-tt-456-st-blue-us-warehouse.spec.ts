import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StBlueUsWarehouse preset`, () => {
  it(`should return a skuTt456StBlueUsWarehouse preset when built for rest`, () => {
    const skuTt456StBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StBlueUsWarehouse()
      .build();
    expect(skuTt456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueUsWarehouse preset when built for graphql`, () => {
    const skuTt456StBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuTt456StBlueUsWarehouse()
      .build();
    expect(skuTt456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuTt456StBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
