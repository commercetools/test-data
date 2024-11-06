import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAirFilterUsWarehouse preset`, () => {
  it(`should return a skuAirFilterUsWarehouse preset when built for rest`, () => {
    const skuAirFilterUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAirFilterUsWarehouse()
      .build();
    expect(skuAirFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterUsWarehouse preset when built for graphql`, () => {
    const skuAirFilterUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAirFilterUsWarehouse()
      .build();
    expect(skuAirFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterUsWarehouse preset when built for legacy rest`, () => {
    const skuAirFilterUsWarehousePreset = InventoryEntryDraft.presets
      .skuAirFilterUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAirFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterUsWarehouse preset when built for legacy graphql`, () => {
    const skuAirFilterUsWarehousePreset = InventoryEntryDraft.presets
      .skuAirFilterUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAirFilterUsWarehousePreset).toMatchInlineSnapshot();
  });
});
