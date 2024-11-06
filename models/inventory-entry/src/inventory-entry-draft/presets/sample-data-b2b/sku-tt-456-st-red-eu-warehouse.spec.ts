import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTt456StRedEuWarehouse preset`, () => {
  it(`should return a skuTt456StRedEuWarehouse preset when built for rest`, () => {
    const skuTt456StRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuTt456StRedEuWarehouse()
      .build();
    expect(skuTt456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedEuWarehouse preset when built for graphql`, () => {
    const skuTt456StRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuTt456StRedEuWarehouse()
      .build();
    expect(skuTt456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedEuWarehouse preset when built for legacy rest`, () => {
    const skuTt456StRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTt456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuTt456StRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuTt456StRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuTt456StRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTt456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
