import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StGreenUsWarehouse preset`, () => {
  it(`should return a skuTt456StGreenUsWarehouse preset when built for rest`, () => {
    const skuTt456StGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StGreenUsWarehouse()
      .build();
    expect(skuTt456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenUsWarehouse preset when built for graphql`, () => {
    const skuTt456StGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuTt456StGreenUsWarehouse()
      .build();
    expect(skuTt456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuTt456StGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
