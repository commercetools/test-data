import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuU123Qr2019DefaultWarehouse preset`, () => {
  it(`should return a skuU123Qr2019DefaultWarehouse preset when built for rest`, () => {
    const skuU123Qr2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuU123Qr2019DefaultWarehouse()
      .build();
    expect(skuU123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2019DefaultWarehouse preset when built for graphql`, () => {
    const skuU123Qr2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuU123Qr2019DefaultWarehouse()
        .build();
    expect(skuU123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuU123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuU123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuU123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuU123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
