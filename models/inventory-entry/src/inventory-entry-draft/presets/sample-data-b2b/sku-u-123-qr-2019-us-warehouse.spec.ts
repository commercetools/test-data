import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuU123Qr2019UsWarehouse preset`, () => {
  it(`should return a skuU123Qr2019UsWarehouse preset when built for rest`, () => {
    const skuU123Qr2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuU123Qr2019UsWarehouse()
      .build();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2019UsWarehouse preset when built for graphql`, () => {
    const skuU123Qr2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuU123Qr2019UsWarehouse()
      .build();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2019UsWarehouse preset when built for legacy rest`, () => {
    const skuU123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuU123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
