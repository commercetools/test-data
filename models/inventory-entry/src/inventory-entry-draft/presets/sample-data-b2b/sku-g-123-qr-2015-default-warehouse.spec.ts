import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuG123Qr2015DefaultWarehouse preset`, () => {
  it(`should return a skuG123Qr2015DefaultWarehouse preset when built for rest`, () => {
    const skuG123Qr2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuG123Qr2015DefaultWarehouse()
      .build();
    expect(skuG123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2015DefaultWarehouse preset when built for graphql`, () => {
    const skuG123Qr2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuG123Qr2015DefaultWarehouse()
        .build();
    expect(skuG123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuG123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuG123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuG123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuG123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
