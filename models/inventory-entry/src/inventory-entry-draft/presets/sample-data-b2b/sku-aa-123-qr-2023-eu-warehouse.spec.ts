import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2023EuWarehouse preset`, () => {
  it(`should return a skuAa123Qr2023EuWarehouse preset when built for rest`, () => {
    const skuAa123Qr2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2023EuWarehouse()
      .build();
    expect(skuAa123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023EuWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAa123Qr2023EuWarehouse()
      .build();
    expect(skuAa123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023EuWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
