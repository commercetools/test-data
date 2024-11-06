import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMm123Qr2023EuWarehouse preset`, () => {
  it(`should return a skuMm123Qr2023EuWarehouse preset when built for rest`, () => {
    const skuMm123Qr2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuMm123Qr2023EuWarehouse()
      .build();
    expect(skuMm123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2023EuWarehouse preset when built for graphql`, () => {
    const skuMm123Qr2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuMm123Qr2023EuWarehouse()
      .build();
    expect(skuMm123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2023EuWarehouse preset when built for legacy rest`, () => {
    const skuMm123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMm123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuMm123Qr2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuMm123Qr2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuMm123Qr2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMm123Qr2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
