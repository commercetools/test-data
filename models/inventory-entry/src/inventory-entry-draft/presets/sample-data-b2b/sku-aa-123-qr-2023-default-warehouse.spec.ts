import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2023DefaultWarehouse preset`, () => {
  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for rest`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2023DefaultWarehouse()
      .build();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAa123Qr2023DefaultWarehouse()
        .build();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
