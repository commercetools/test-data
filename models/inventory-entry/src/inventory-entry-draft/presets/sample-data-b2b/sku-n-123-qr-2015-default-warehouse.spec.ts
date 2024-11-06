import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuN123Qr2015DefaultWarehouse preset`, () => {
  it(`should return a skuN123Qr2015DefaultWarehouse preset when built for rest`, () => {
    const skuN123Qr2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuN123Qr2015DefaultWarehouse()
      .build();
    expect(skuN123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015DefaultWarehouse preset when built for graphql`, () => {
    const skuN123Qr2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuN123Qr2015DefaultWarehouse()
        .build();
    expect(skuN123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuN123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuN123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuN123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuN123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
