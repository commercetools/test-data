import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StBlueDefaultWarehouse preset`, () => {
  it(`should return a skuZz456StBlueDefaultWarehouse preset when built for rest`, () => {
    const skuZz456StBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StBlueDefaultWarehouse()
      .build();
    expect(skuZz456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuZz456StBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuZz456StBlueDefaultWarehouse()
        .build();
    expect(skuZz456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuZz456StBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
