import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuN123Qr2019EuWarehouse preset`, () => {
  it(`should return a skuN123Qr2019EuWarehouse preset when built for rest`, () => {
    const skuN123Qr2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuN123Qr2019EuWarehouse()
      .build();
    expect(skuN123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2019EuWarehouse preset when built for graphql`, () => {
    const skuN123Qr2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuN123Qr2019EuWarehouse()
      .build();
    expect(skuN123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2019EuWarehouse preset when built for legacy rest`, () => {
    const skuN123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuN123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuN123Qr2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuN123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuN123Qr2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuN123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
