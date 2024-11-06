import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuU123Qr2015EuWarehouse preset`, () => {
  it(`should return a skuU123Qr2015EuWarehouse preset when built for rest`, () => {
    const skuU123Qr2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuU123Qr2015EuWarehouse()
      .build();
    expect(skuU123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2015EuWarehouse preset when built for graphql`, () => {
    const skuU123Qr2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuU123Qr2015EuWarehouse()
      .build();
    expect(skuU123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2015EuWarehouse preset when built for legacy rest`, () => {
    const skuU123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuU123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuU123Qr2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuU123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuU123Qr2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuU123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
