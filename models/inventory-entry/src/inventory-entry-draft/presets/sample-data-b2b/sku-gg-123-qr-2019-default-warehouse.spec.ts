import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2019DefaultWarehouse preset`, () => {
  it(`should return a skuGg123Qr2019DefaultWarehouse preset when built for rest`, () => {
    const skuGg123Qr2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2019DefaultWarehouse()
      .build();
    expect(skuGg123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019DefaultWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuGg123Qr2019DefaultWarehouse()
        .build();
    expect(skuGg123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
