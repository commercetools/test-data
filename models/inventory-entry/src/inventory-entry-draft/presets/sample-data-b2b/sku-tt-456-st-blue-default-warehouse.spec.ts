import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StBlueDefaultWarehouse preset`, () => {
  it(`should return a skuTt456StBlueDefaultWarehouse preset when built for rest`, () => {
    const skuTt456StBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StBlueDefaultWarehouse()
      .build();
    expect(skuTt456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuTt456StBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuTt456StBlueDefaultWarehouse()
        .build();
    expect(skuTt456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuTt456StBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
