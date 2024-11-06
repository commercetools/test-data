import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFuelFilterEuWarehouse preset`, () => {
  it(`should return a skuFuelFilterEuWarehouse preset when built for rest`, () => {
    const skuFuelFilterEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFuelFilterEuWarehouse()
      .build();
    expect(skuFuelFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterEuWarehouse preset when built for graphql`, () => {
    const skuFuelFilterEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFuelFilterEuWarehouse()
      .build();
    expect(skuFuelFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterEuWarehouse preset when built for legacy rest`, () => {
    const skuFuelFilterEuWarehousePreset = InventoryEntryDraft.presets
      .skuFuelFilterEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFuelFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterEuWarehouse preset when built for legacy graphql`, () => {
    const skuFuelFilterEuWarehousePreset = InventoryEntryDraft.presets
      .skuFuelFilterEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFuelFilterEuWarehousePreset).toMatchInlineSnapshot();
  });
});
