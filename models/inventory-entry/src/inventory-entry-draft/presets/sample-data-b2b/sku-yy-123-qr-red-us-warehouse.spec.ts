import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrRedUsWarehouse preset`, () => {
  it(`should return a skuYy123QrRedUsWarehouse preset when built for rest`, () => {
    const skuYy123QrRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrRedUsWarehouse()
      .build();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedUsWarehouse preset when built for graphql`, () => {
    const skuYy123QrRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuYy123QrRedUsWarehouse()
      .build();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedUsWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
