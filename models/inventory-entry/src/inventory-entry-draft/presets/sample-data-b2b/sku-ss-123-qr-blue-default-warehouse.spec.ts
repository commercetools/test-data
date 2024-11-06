import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrBlueDefaultWarehouse preset`, () => {
  it(`should return a skuSs123QrBlueDefaultWarehouse preset when built for rest`, () => {
    const skuSs123QrBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrBlueDefaultWarehouse()
      .build();
    expect(skuSs123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuSs123QrBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuSs123QrBlueDefaultWarehouse()
        .build();
    expect(skuSs123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
