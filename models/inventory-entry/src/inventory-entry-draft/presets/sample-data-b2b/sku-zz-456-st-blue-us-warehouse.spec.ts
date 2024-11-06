import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StBlueUsWarehouse preset`, () => {
  it(`should return a skuZz456StBlueUsWarehouse preset when built for rest`, () => {
    const skuZz456StBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StBlueUsWarehouse()
      .build();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueUsWarehouse preset when built for graphql`, () => {
    const skuZz456StBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZz456StBlueUsWarehouse()
      .build();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuZz456StBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
