import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzBlueEuWarehouse preset`, () => {
  it(`should return a skuWw567YzBlueEuWarehouse preset when built for rest`, () => {
    const skuWw567YzBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzBlueEuWarehouse()
      .build();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueEuWarehouse preset when built for graphql`, () => {
    const skuWw567YzBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuWw567YzBlueEuWarehouse()
      .build();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
