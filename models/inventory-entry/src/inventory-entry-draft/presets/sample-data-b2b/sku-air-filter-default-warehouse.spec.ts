import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAirFilterDefaultWarehouse preset`, () => {
  it(`should return a skuAirFilterDefaultWarehouse preset when built for rest`, () => {
    const skuAirFilterDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuAirFilterDefaultWarehouse()
      .build();
    expect(skuAirFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterDefaultWarehouse preset when built for graphql`, () => {
    const skuAirFilterDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets.skuAirFilterDefaultWarehouse().build();
    expect(skuAirFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAirFilterDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAirFilterDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAirFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAirFilterDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAirFilterDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAirFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
