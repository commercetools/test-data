import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzBlueEuWarehouse preset`, () => {
  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for rest`, () => {
    const skuCcc567YzBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzBlueEuWarehouse()
      .build();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for graphql`, () => {
    const skuCcc567YzBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCcc567YzBlueEuWarehouse()
      .build();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
