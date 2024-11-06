import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2015UsWarehouse preset`, () => {
  it(`should return a skuGg123Qr2015UsWarehouse preset when built for rest`, () => {
    const skuGg123Qr2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2015UsWarehouse()
      .build();
    expect(skuGg123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015UsWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGg123Qr2015UsWarehouse()
      .build();
    expect(skuGg123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015UsWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
