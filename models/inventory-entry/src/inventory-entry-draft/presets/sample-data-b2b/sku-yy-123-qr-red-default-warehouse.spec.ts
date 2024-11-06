import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrRedDefaultWarehouse preset`, () => {
  it(`should return a skuYy123QrRedDefaultWarehouse preset when built for rest`, () => {
    const skuYy123QrRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrRedDefaultWarehouse()
      .build();
    expect(skuYy123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedDefaultWarehouse preset when built for graphql`, () => {
    const skuYy123QrRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuYy123QrRedDefaultWarehouse()
        .build();
    expect(skuYy123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
