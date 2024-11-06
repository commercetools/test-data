import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StBlueEuWarehouse preset`, () => {
  it(`should return a skuTt456StBlueEuWarehouse preset when built for rest`, () => {
    const skuTt456StBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StBlueEuWarehouse()
      .build();
    expect(skuTt456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueEuWarehouse preset when built for graphql`, () => {
    const skuTt456StBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuTt456StBlueEuWarehouse()
      .build();
    expect(skuTt456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuTt456StBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
