import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHydraulicHoseDefaultWarehouse preset`, () => {
  it(`should return a skuHydraulicHoseDefaultWarehouse preset when built for rest`, () => {
    const skuHydraulicHoseDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuHydraulicHoseDefaultWarehouse()
        .build();
    expect(skuHydraulicHoseDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseDefaultWarehouse preset when built for graphql`, () => {
    const skuHydraulicHoseDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHydraulicHoseDefaultWarehouse()
        .build();
    expect(skuHydraulicHoseDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseDefaultWarehouse preset when built for legacy rest`, () => {
    const skuHydraulicHoseDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHydraulicHoseDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHydraulicHoseDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHydraulicHoseDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHydraulicHoseDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHydraulicHoseDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHydraulicHoseDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
