import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2015UsWarehouse preset`, () => {
  it(`should return a skuAa123Qr2015UsWarehouse preset when built for rest`, () => {
    const skuAa123Qr2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2015UsWarehouse()
      .build();
    expect(skuAa123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015UsWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAa123Qr2015UsWarehouse()
      .build();
    expect(skuAa123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015UsWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
