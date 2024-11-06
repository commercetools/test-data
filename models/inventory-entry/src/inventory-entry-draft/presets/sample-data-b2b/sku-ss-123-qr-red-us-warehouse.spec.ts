import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrRedUsWarehouse preset`, () => {
  it(`should return a skuSs123QrRedUsWarehouse preset when built for rest`, () => {
    const skuSs123QrRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrRedUsWarehouse()
      .build();
    expect(skuSs123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedUsWarehouse preset when built for graphql`, () => {
    const skuSs123QrRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuSs123QrRedUsWarehouse()
      .build();
    expect(skuSs123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedUsWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
