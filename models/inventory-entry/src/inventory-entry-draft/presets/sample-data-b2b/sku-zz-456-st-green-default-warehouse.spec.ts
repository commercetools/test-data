import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StGreenDefaultWarehouse preset`, () => {
  it(`should return a skuZz456StGreenDefaultWarehouse preset when built for rest`, () => {
    const skuZz456StGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuZz456StGreenDefaultWarehouse().build();
    expect(skuZz456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuZz456StGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuZz456StGreenDefaultWarehouse()
        .build();
    expect(skuZz456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuZz456StGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
