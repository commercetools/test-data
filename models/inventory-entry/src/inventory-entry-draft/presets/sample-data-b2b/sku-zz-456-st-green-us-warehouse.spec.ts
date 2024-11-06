import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StGreenUsWarehouse preset`, () => {
  it(`should return a skuZz456StGreenUsWarehouse preset when built for rest`, () => {
    const skuZz456StGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StGreenUsWarehouse()
      .build();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenUsWarehouse preset when built for graphql`, () => {
    const skuZz456StGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZz456StGreenUsWarehouse()
      .build();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuZz456StGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
