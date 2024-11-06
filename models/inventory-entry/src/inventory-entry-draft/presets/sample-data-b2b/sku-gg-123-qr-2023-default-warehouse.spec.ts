import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2023DefaultWarehouse preset`, () => {
  it(`should return a skuGg123Qr2023DefaultWarehouse preset when built for rest`, () => {
    const skuGg123Qr2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2023DefaultWarehouse()
      .build();
    expect(skuGg123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023DefaultWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuGg123Qr2023DefaultWarehouse()
        .build();
    expect(skuGg123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
