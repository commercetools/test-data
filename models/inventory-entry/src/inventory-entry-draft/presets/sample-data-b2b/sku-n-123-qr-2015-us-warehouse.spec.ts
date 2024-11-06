import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuN123Qr2015UsWarehouse preset`, () => {
  it(`should return a skuN123Qr2015UsWarehouse preset when built for rest`, () => {
    const skuN123Qr2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuN123Qr2015UsWarehouse()
      .build();
    expect(skuN123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015UsWarehouse preset when built for graphql`, () => {
    const skuN123Qr2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuN123Qr2015UsWarehouse()
      .build();
    expect(skuN123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015UsWarehouse preset when built for legacy rest`, () => {
    const skuN123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuN123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuN123Qr2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuN123Qr2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
