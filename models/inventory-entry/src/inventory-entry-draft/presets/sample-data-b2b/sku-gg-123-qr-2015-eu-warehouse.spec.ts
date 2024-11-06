import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2015EuWarehouse preset`, () => {
  it(`should return a skuGg123Qr2015EuWarehouse preset when built for rest`, () => {
    const skuGg123Qr2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2015EuWarehouse()
      .build();
    expect(skuGg123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015EuWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGg123Qr2015EuWarehouse()
      .build();
    expect(skuGg123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015EuWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
