import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StBlueEuWarehouse preset`, () => {
  it(`should return a skuZz456StBlueEuWarehouse preset when built for rest`, () => {
    const skuZz456StBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StBlueEuWarehouse()
      .build();
    expect(skuZz456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueEuWarehouse preset when built for graphql`, () => {
    const skuZz456StBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZz456StBlueEuWarehouse()
      .build();
    expect(skuZz456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuZz456StBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
