import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2019DefaultWarehouse preset`, () => {
  it(`should return a skuAa123Qr2019DefaultWarehouse preset when built for rest`, () => {
    const skuAa123Qr2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2019DefaultWarehouse()
      .build();
    expect(skuAa123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2019DefaultWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAa123Qr2019DefaultWarehouse()
        .build();
    expect(skuAa123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
