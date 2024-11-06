import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2023EuWarehouse preset`, () => {
  it(`should return a skuGg123Qr2023EuWarehouse preset when built for rest`, () => {
    const skuGg123Qr2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2023EuWarehouse()
      .build();
    expect(skuGg123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023EuWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGg123Qr2023EuWarehouse()
      .build();
    expect(skuGg123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023EuWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
