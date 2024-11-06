import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPistonRingSetEuWarehouse preset`, () => {
  it(`should return a skuPistonRingSetEuWarehouse preset when built for rest`, () => {
    const skuPistonRingSetEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuPistonRingSetEuWarehouse()
      .build();
    expect(skuPistonRingSetEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetEuWarehouse preset when built for graphql`, () => {
    const skuPistonRingSetEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPistonRingSetEuWarehouse()
      .build();
    expect(skuPistonRingSetEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetEuWarehouse preset when built for legacy rest`, () => {
    const skuPistonRingSetEuWarehousePreset = InventoryEntryDraft.presets
      .skuPistonRingSetEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPistonRingSetEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPistonRingSetEuWarehouse preset when built for legacy graphql`, () => {
    const skuPistonRingSetEuWarehousePreset = InventoryEntryDraft.presets
      .skuPistonRingSetEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPistonRingSetEuWarehousePreset).toMatchInlineSnapshot();
  });
});
