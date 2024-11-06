import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuN123Qr2023UsWarehouse preset`, () => {
  it(`should return a skuN123Qr2023UsWarehouse preset when built for rest`, () => {
    const skuN123Qr2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuN123Qr2023UsWarehouse()
      .build();
    expect(skuN123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2023UsWarehouse preset when built for graphql`, () => {
    const skuN123Qr2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuN123Qr2023UsWarehouse()
      .build();
    expect(skuN123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2023UsWarehouse preset when built for legacy rest`, () => {
    const skuN123Qr2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuN123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuN123Qr2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuN123Qr2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
