import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2019EuWarehouse preset`, () => {
  it(`should return a skuMm123Qr2019EuWarehouse preset when built for rest`, () => {
    const skuMm123Qr2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2019EuWarehouse()
      .build();
    expect(skuMm123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019EuWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuMm123Qr2019EuWarehouse()
      .build();
    expect(skuMm123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019EuWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
