import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StRedEuWarehouse preset`, () => {
  it(`should return a skuFff456StRedEuWarehouse preset when built for rest`, () => {
    const skuFff456StRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StRedEuWarehouse()
      .build();
    expect(skuFff456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedEuWarehouse preset when built for graphql`, () => {
    const skuFff456StRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFff456StRedEuWarehouse()
      .build();
    expect(skuFff456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedEuWarehouse preset when built for legacy rest`, () => {
    const skuFff456StRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
