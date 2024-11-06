import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrRedUsWarehouse preset`, () => {
  it(`should return a skuEee123QrRedUsWarehouse preset when built for rest`, () => {
    const skuEee123QrRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrRedUsWarehouse()
      .build();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedUsWarehouse preset when built for graphql`, () => {
    const skuEee123QrRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEee123QrRedUsWarehouse()
      .build();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedUsWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
