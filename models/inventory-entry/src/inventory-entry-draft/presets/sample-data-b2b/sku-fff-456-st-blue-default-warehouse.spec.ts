import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StBlueDefaultWarehouse preset`, () => {
  it(`should return a skuFff456StBlueDefaultWarehouse preset when built for rest`, () => {
    const skuFff456StBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuFff456StBlueDefaultWarehouse().build();
    expect(skuFff456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuFff456StBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFff456StBlueDefaultWarehouse()
        .build();
    expect(skuFff456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuFff456StBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
