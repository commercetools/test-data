import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2019UsWarehouse preset`, () => {
  it(`should return a skuGg123Qr2019UsWarehouse preset when built for rest`, () => {
    const skuGg123Qr2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2019UsWarehouse()
      .build();
    expect(skuGg123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019UsWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGg123Qr2019UsWarehouse()
      .build();
    expect(skuGg123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019UsWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
