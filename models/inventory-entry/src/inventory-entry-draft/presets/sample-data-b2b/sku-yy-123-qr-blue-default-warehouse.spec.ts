import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrBlueDefaultWarehouse preset`, () => {
  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for rest`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrBlueDefaultWarehouse()
      .build();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuYy123QrBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuYy123QrBlueDefaultWarehouse()
        .build();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
