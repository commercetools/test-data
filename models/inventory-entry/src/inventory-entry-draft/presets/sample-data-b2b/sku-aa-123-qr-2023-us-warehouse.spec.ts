import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2023UsWarehouse preset`, () => {
  it(`should return a skuAa123Qr2023UsWarehouse preset when built for rest`, () => {
    const skuAa123Qr2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2023UsWarehouse()
      .build();
    expect(skuAa123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023UsWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAa123Qr2023UsWarehouse()
      .build();
    expect(skuAa123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023UsWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
