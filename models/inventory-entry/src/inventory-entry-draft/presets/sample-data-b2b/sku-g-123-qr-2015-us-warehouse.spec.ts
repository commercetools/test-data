import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuG123Qr2015UsWarehouse preset`, () => {
  it(`should return a skuG123Qr2015UsWarehouse preset when built for rest`, () => {
    const skuG123Qr2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuG123Qr2015UsWarehouse()
      .build();
    expect(skuG123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2015UsWarehouse preset when built for graphql`, () => {
    const skuG123Qr2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuG123Qr2015UsWarehouse()
      .build();
    expect(skuG123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2015UsWarehouse preset when built for legacy rest`, () => {
    const skuG123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuG123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuG123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuG123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
