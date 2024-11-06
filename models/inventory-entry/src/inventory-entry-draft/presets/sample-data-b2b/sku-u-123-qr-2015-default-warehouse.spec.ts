import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuU123Qr2015DefaultWarehouse preset`, () => {
  it(`should return a skuU123Qr2015DefaultWarehouse preset when built for rest`, () => {
    const skuU123Qr2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuU123Qr2015DefaultWarehouse()
      .build();
    expect(skuU123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2015DefaultWarehouse preset when built for graphql`, () => {
    const skuU123Qr2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuU123Qr2015DefaultWarehouse()
        .build();
    expect(skuU123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuU123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuU123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuU123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuU123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
