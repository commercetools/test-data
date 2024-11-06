import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuG123Qr2023EuWarehouse preset`, () => {
  it(`should return a skuG123Qr2023EuWarehouse preset when built for rest`, () => {
    const skuG123Qr2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuG123Qr2023EuWarehouse()
      .build();
    expect(skuG123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2023EuWarehouse preset when built for graphql`, () => {
    const skuG123Qr2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuG123Qr2023EuWarehouse()
      .build();
    expect(skuG123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2023EuWarehouse preset when built for legacy rest`, () => {
    const skuG123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuG123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuG123Qr2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuG123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuG123Qr2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuG123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
