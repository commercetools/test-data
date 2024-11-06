import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2019DefaultWarehouse preset`, () => {
  it(`should return a skuMm123Qr2019DefaultWarehouse preset when built for rest`, () => {
    const skuMm123Qr2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2019DefaultWarehouse()
      .build();
    expect(skuMm123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019DefaultWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuMm123Qr2019DefaultWarehouse()
        .build();
    expect(skuMm123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
