import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrRedDefaultWarehouse preset`, () => {
  it(`should return a skuSs123QrRedDefaultWarehouse preset when built for rest`, () => {
    const skuSs123QrRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrRedDefaultWarehouse()
      .build();
    expect(skuSs123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedDefaultWarehouse preset when built for graphql`, () => {
    const skuSs123QrRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuSs123QrRedDefaultWarehouse()
        .build();
    expect(skuSs123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
