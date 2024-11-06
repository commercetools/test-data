import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPistonRingSetDefaultWarehouse preset`, () => {
  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for rest`, () => {
    const skuPistonRingSetDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuPistonRingSetDefaultWarehouse()
        .build();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for graphql`, () => {
    const skuPistonRingSetDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPistonRingSetDefaultWarehouse()
        .build();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for legacy rest`, () => {
    const skuPistonRingSetDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPistonRingSetDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPistonRingSetDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPistonRingSetDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
