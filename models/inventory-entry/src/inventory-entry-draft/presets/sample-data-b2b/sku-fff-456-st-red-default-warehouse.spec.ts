import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StRedDefaultWarehouse preset`, () => {
  it(`should return a skuFff456StRedDefaultWarehouse preset when built for rest`, () => {
    const skuFff456StRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StRedDefaultWarehouse()
      .build();
    expect(skuFff456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedDefaultWarehouse preset when built for graphql`, () => {
    const skuFff456StRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFff456StRedDefaultWarehouse()
        .build();
    expect(skuFff456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuFff456StRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
