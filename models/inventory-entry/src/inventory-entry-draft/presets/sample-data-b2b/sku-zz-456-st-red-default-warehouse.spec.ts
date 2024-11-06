import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StRedDefaultWarehouse preset`, () => {
  it(`should return a skuZz456StRedDefaultWarehouse preset when built for rest`, () => {
    const skuZz456StRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StRedDefaultWarehouse()
      .build();
    expect(skuZz456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedDefaultWarehouse preset when built for graphql`, () => {
    const skuZz456StRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuZz456StRedDefaultWarehouse()
        .build();
    expect(skuZz456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuZz456StRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
