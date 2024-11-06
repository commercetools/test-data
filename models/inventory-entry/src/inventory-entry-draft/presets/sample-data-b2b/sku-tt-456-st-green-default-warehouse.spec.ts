import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StGreenDefaultWarehouse preset`, () => {
  it(`should return a skuTt456StGreenDefaultWarehouse preset when built for rest`, () => {
    const skuTt456StGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuTt456StGreenDefaultWarehouse().build();
    expect(skuTt456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuTt456StGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuTt456StGreenDefaultWarehouse()
        .build();
    expect(skuTt456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuTt456StGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
