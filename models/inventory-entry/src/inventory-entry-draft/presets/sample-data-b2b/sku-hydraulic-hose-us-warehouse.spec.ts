import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHydraulicHoseUsWarehouse preset`, () => {
  it(`should return a skuHydraulicHoseUsWarehouse preset when built for rest`, () => {
    const skuHydraulicHoseUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuHydraulicHoseUsWarehouse()
      .build();
    expect(skuHydraulicHoseUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseUsWarehouse preset when built for graphql`, () => {
    const skuHydraulicHoseUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHydraulicHoseUsWarehouse()
      .build();
    expect(skuHydraulicHoseUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseUsWarehouse preset when built for legacy rest`, () => {
    const skuHydraulicHoseUsWarehousePreset = InventoryEntryDraft.presets
      .skuHydraulicHoseUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHydraulicHoseUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseUsWarehouse preset when built for legacy graphql`, () => {
    const skuHydraulicHoseUsWarehousePreset = InventoryEntryDraft.presets
      .skuHydraulicHoseUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHydraulicHoseUsWarehousePreset).toMatchInlineSnapshot();
  });
});
