import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StRedUsWarehouse preset`, () => {
  it(`should return a skuTt456StRedUsWarehouse preset when built for rest`, () => {
    const skuTt456StRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StRedUsWarehouse()
      .build();
    expect(skuTt456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedUsWarehouse preset when built for graphql`, () => {
    const skuTt456StRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuTt456StRedUsWarehouse()
      .build();
    expect(skuTt456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedUsWarehouse preset when built for legacy rest`, () => {
    const skuTt456StRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
