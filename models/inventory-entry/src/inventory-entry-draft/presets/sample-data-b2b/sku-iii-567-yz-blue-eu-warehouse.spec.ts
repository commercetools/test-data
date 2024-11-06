import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzBlueEuWarehouse preset`, () => {
  it(`should return a skuIii567YzBlueEuWarehouse preset when built for rest`, () => {
    const skuIii567YzBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzBlueEuWarehouse()
      .build();
    expect(skuIii567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueEuWarehouse preset when built for graphql`, () => {
    const skuIii567YzBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIii567YzBlueEuWarehouse()
      .build();
    expect(skuIii567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
