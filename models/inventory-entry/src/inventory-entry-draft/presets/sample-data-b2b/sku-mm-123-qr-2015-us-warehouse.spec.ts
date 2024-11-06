import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2015UsWarehouse preset`, () => {
  it(`should return a skuMm123Qr2015UsWarehouse preset when built for rest`, () => {
    const skuMm123Qr2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2015UsWarehouse()
      .build();
    expect(skuMm123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2015UsWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuMm123Qr2015UsWarehouse()
      .build();
    expect(skuMm123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2015UsWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
