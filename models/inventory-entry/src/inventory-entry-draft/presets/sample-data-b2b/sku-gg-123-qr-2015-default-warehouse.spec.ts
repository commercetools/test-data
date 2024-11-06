import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2015DefaultWarehouse preset`, () => {
  it(`should return a skuGg123Qr2015DefaultWarehouse preset when built for rest`, () => {
    const skuGg123Qr2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2015DefaultWarehouse()
      .build();
    expect(skuGg123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015DefaultWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuGg123Qr2015DefaultWarehouse()
        .build();
    expect(skuGg123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
