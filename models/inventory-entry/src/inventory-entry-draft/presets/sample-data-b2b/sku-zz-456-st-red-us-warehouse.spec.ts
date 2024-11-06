import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StRedUsWarehouse preset`, () => {
  it(`should return a skuZz456StRedUsWarehouse preset when built for rest`, () => {
    const skuZz456StRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StRedUsWarehouse()
      .build();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedUsWarehouse preset when built for graphql`, () => {
    const skuZz456StRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZz456StRedUsWarehouse()
      .build();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedUsWarehouse preset when built for legacy rest`, () => {
    const skuZz456StRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
