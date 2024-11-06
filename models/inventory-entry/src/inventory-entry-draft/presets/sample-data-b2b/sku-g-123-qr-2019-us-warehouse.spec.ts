import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuG123Qr2019UsWarehouse preset`, () => {
  it(`should return a skuG123Qr2019UsWarehouse preset when built for rest`, () => {
    const skuG123Qr2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuG123Qr2019UsWarehouse()
      .build();
    expect(skuG123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2019UsWarehouse preset when built for graphql`, () => {
    const skuG123Qr2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuG123Qr2019UsWarehouse()
      .build();
    expect(skuG123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2019UsWarehouse preset when built for legacy rest`, () => {
    const skuG123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuG123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuG123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuG123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
