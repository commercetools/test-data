import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFuelFilterDefaultWarehouse preset`, () => {
  it(`should return a skuFuelFilterDefaultWarehouse preset when built for rest`, () => {
    const skuFuelFilterDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuFuelFilterDefaultWarehouse()
      .build();
    expect(skuFuelFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterDefaultWarehouse preset when built for graphql`, () => {
    const skuFuelFilterDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFuelFilterDefaultWarehouse()
        .build();
    expect(skuFuelFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterDefaultWarehouse preset when built for legacy rest`, () => {
    const skuFuelFilterDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFuelFilterDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFuelFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFuelFilterDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFuelFilterDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFuelFilterDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFuelFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
