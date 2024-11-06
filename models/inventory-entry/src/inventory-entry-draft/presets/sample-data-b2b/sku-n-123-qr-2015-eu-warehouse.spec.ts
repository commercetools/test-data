import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuN123Qr2015EuWarehouse preset`, () => {
  it(`should return a skuN123Qr2015EuWarehouse preset when built for rest`, () => {
    const skuN123Qr2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuN123Qr2015EuWarehouse()
      .build();
    expect(skuN123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015EuWarehouse preset when built for graphql`, () => {
    const skuN123Qr2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuN123Qr2015EuWarehouse()
      .build();
    expect(skuN123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015EuWarehouse preset when built for legacy rest`, () => {
    const skuN123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuN123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuN123Qr2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuN123Qr2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
