import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2015DefaultWarehouse preset`, () => {
  it(`should return a skuMm123Qr2015DefaultWarehouse preset when built for rest`, () => {
    const skuMm123Qr2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2015DefaultWarehouse()
      .build();
    expect(skuMm123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2015DefaultWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuMm123Qr2015DefaultWarehouse()
        .build();
    expect(skuMm123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
