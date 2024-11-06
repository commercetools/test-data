import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAa123Qr2019EuWarehouse preset`, () => {
  it(`should return a skuAa123Qr2019EuWarehouse preset when built for rest`, () => {
    const skuAa123Qr2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAa123Qr2019EuWarehouse()
      .build();
    expect(skuAa123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2019EuWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAa123Qr2019EuWarehouse()
      .build();
    expect(skuAa123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2019EuWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAa123Qr2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuAa123Qr2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
