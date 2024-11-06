import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPistonRingSetUsWarehouse preset`, () => {
  it(`should return a skuPistonRingSetUsWarehouse preset when built for rest`, () => {
    const skuPistonRingSetUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuPistonRingSetUsWarehouse()
      .build();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetUsWarehouse preset when built for graphql`, () => {
    const skuPistonRingSetUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPistonRingSetUsWarehouse()
      .build();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetUsWarehouse preset when built for legacy rest`, () => {
    const skuPistonRingSetUsWarehousePreset = InventoryEntryDraft.presets
      .skuPistonRingSetUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetUsWarehouse preset when built for legacy graphql`, () => {
    const skuPistonRingSetUsWarehousePreset = InventoryEntryDraft.presets
      .skuPistonRingSetUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot();
  });
});
