import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuN123Qr2019DefaultWarehouse preset`, () => {
  it(`should return a skuN123Qr2019DefaultWarehouse preset when built for rest`, () => {
    const skuN123Qr2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuN123Qr2019DefaultWarehouse()
      .build();
    expect(skuN123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2019DefaultWarehouse preset when built for graphql`, () => {
    const skuN123Qr2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuN123Qr2019DefaultWarehouse()
        .build();
    expect(skuN123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuN123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuN123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuN123Qr2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuN123Qr2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
