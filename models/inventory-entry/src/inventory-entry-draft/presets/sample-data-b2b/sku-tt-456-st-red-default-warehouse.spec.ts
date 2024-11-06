import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StRedDefaultWarehouse preset`, () => {
  it(`should return a skuTt456StRedDefaultWarehouse preset when built for rest`, () => {
    const skuTt456StRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StRedDefaultWarehouse()
      .build();
    expect(skuTt456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedDefaultWarehouse preset when built for graphql`, () => {
    const skuTt456StRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuTt456StRedDefaultWarehouse()
        .build();
    expect(skuTt456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuTt456StRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
