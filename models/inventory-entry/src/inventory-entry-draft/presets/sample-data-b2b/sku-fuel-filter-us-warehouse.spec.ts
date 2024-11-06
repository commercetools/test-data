import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFuelFilterUsWarehouse preset`, () => {
  it(`should return a skuFuelFilterUsWarehouse preset when built for rest`, () => {
    const skuFuelFilterUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuFuelFilterUsWarehouse()
      .build();
    expect(skuFuelFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterUsWarehouse preset when built for graphql`, () => {
    const skuFuelFilterUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFuelFilterUsWarehouse()
      .build();
    expect(skuFuelFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterUsWarehouse preset when built for legacy rest`, () => {
    const skuFuelFilterUsWarehousePreset = InventoryEntryDraft.presets
      .skuFuelFilterUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFuelFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterUsWarehouse preset when built for legacy graphql`, () => {
    const skuFuelFilterUsWarehousePreset = InventoryEntryDraft.presets
      .skuFuelFilterUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFuelFilterUsWarehousePreset).toMatchInlineSnapshot();
  });
});
