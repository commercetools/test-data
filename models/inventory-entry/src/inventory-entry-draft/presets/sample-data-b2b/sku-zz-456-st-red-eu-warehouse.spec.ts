import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZz456StRedEuWarehouse preset`, () => {
  it(`should return a skuZz456StRedEuWarehouse preset when built for rest`, () => {
    const skuZz456StRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuZz456StRedEuWarehouse()
      .build();
    expect(skuZz456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedEuWarehouse preset when built for graphql`, () => {
    const skuZz456StRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZz456StRedEuWarehouse()
      .build();
    expect(skuZz456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedEuWarehouse preset when built for legacy rest`, () => {
    const skuZz456StRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZz456StRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuZz456StRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
