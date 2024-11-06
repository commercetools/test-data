import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StGreenDefaultWarehouse preset`, () => {
  it(`should return a skuFff456StGreenDefaultWarehouse preset when built for rest`, () => {
    const skuFff456StGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuFff456StGreenDefaultWarehouse()
        .build();
    expect(skuFff456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuFff456StGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFff456StGreenDefaultWarehouse()
        .build();
    expect(skuFff456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuFff456StGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
