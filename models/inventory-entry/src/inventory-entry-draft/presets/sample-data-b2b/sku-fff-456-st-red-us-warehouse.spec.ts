import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StRedUsWarehouse preset`, () => {
  it(`should return a skuFff456StRedUsWarehouse preset when built for rest`, () => {
    const skuFff456StRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StRedUsWarehouse()
      .build();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedUsWarehouse preset when built for graphql`, () => {
    const skuFff456StRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFff456StRedUsWarehouse()
      .build();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedUsWarehouse preset when built for legacy rest`, () => {
    const skuFff456StRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
