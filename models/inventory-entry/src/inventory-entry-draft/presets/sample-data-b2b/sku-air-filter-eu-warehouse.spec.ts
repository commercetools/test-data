import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAirFilterEuWarehouse preset`, () => {
  it(`should return a skuAirFilterEuWarehouse preset when built for rest`, () => {
    const skuAirFilterEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAirFilterEuWarehouse()
      .build();
    expect(skuAirFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterEuWarehouse preset when built for graphql`, () => {
    const skuAirFilterEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAirFilterEuWarehouse()
      .build();
    expect(skuAirFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterEuWarehouse preset when built for legacy rest`, () => {
    const skuAirFilterEuWarehousePreset = InventoryEntryDraft.presets
      .skuAirFilterEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAirFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAirFilterEuWarehouse preset when built for legacy graphql`, () => {
    const skuAirFilterEuWarehousePreset = InventoryEntryDraft.presets
      .skuAirFilterEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAirFilterEuWarehousePreset).toMatchInlineSnapshot();
  });
});
