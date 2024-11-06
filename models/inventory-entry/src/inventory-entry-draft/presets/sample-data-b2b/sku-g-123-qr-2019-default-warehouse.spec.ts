import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuG123Qr2019DefaultWarehouse preset`, () => {
  it(`should return a skuG123Qr2019DefaultWarehouse preset when built for rest`, () => {
    const skuG123Qr2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuG123Qr2019DefaultWarehouse()
      .build();
    expect(skuG123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2019DefaultWarehouse preset when built for graphql`, () => {
    const skuG123Qr2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuG123Qr2019DefaultWarehouse()
        .build();
    expect(skuG123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuG123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuG123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuG123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuG123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
