import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHydraulicHoseEuWarehouse preset`, () => {
  it(`should return a skuHydraulicHoseEuWarehouse preset when built for rest`, () => {
    const skuHydraulicHoseEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHydraulicHoseEuWarehouse()
      .build();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseEuWarehouse preset when built for graphql`, () => {
    const skuHydraulicHoseEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHydraulicHoseEuWarehouse()
      .build();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseEuWarehouse preset when built for legacy rest`, () => {
    const skuHydraulicHoseEuWarehousePreset = InventoryEntryDraft.presets
      .skuHydraulicHoseEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseEuWarehouse preset when built for legacy graphql`, () => {
    const skuHydraulicHoseEuWarehousePreset = InventoryEntryDraft.presets
      .skuHydraulicHoseEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot();
  });
});
