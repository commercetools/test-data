import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGg123Qr2019EuWarehouse preset`, () => {
  it(`should return a skuGg123Qr2019EuWarehouse preset when built for rest`, () => {
    const skuGg123Qr2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuGg123Qr2019EuWarehouse()
      .build();
    expect(skuGg123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019EuWarehouse preset when built for graphql`, () => {
    const skuGg123Qr2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGg123Qr2019EuWarehouse()
      .build();
    expect(skuGg123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019EuWarehouse preset when built for legacy rest`, () => {
    const skuGg123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGg123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGg123Qr2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuGg123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuGg123Qr2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGg123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
