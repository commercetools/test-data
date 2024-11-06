import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2023DefaultWarehouse preset`, () => {
  it(`should return a skuMm123Qr2023DefaultWarehouse preset when built for rest`, () => {
    const skuMm123Qr2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2023DefaultWarehouse()
      .build();
    expect(skuMm123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2023DefaultWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuMm123Qr2023DefaultWarehouse()
        .build();
    expect(skuMm123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
