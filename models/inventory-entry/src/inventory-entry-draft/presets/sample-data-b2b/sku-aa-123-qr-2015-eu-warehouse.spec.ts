import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2015EuWarehouse preset`, () => {
  it(`should return a skuAa123Qr2015EuWarehouse preset when built for rest`, () => {
    const skuAa123Qr2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2015EuWarehouse()
      .build();
    expect(skuAa123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015EuWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAa123Qr2015EuWarehouse()
      .build();
    expect(skuAa123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015EuWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
