import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFff456StBlueUsWarehouse preset`, () => {
  it(`should return a skuFff456StBlueUsWarehouse preset when built for rest`, () => {
    const skuFff456StBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuFff456StBlueUsWarehouse()
      .build();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueUsWarehouse preset when built for graphql`, () => {
    const skuFff456StBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFff456StBlueUsWarehouse()
      .build();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuFff456StBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFff456StBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuFff456StBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
