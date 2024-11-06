import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StBlueEuWarehouse preset`, () => {
  it(`should return a skuFff456StBlueEuWarehouse preset when built for rest`, () => {
    const skuFff456StBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StBlueEuWarehouse()
      .build();
    expect(skuFff456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueEuWarehouse preset when built for graphql`, () => {
    const skuFff456StBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFff456StBlueEuWarehouse()
      .build();
    expect(skuFff456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuFff456StBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
