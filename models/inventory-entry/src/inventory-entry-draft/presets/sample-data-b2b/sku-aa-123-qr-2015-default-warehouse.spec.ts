import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2015DefaultWarehouse preset`, () => {
  it(`should return a skuAa123Qr2015DefaultWarehouse preset when built for rest`, () => {
    const skuAa123Qr2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2015DefaultWarehouse()
      .build();
    expect(skuAa123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015DefaultWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAa123Qr2015DefaultWarehouse()
        .build();
    expect(skuAa123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
