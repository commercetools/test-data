import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2023UsWarehouse preset`, () => {
  it(`should return a skuGg123Qr2023UsWarehouse preset when built for rest`, () => {
    const skuGg123Qr2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2023UsWarehouse()
      .build();
    expect(skuGg123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023UsWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGg123Qr2023UsWarehouse()
      .build();
    expect(skuGg123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023UsWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
