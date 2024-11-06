import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2019UsWarehouse preset`, () => {
  it(`should return a skuMm123Qr2019UsWarehouse preset when built for rest`, () => {
    const skuMm123Qr2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2019UsWarehouse()
      .build();
    expect(skuMm123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019UsWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuMm123Qr2019UsWarehouse()
      .build();
    expect(skuMm123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019UsWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
