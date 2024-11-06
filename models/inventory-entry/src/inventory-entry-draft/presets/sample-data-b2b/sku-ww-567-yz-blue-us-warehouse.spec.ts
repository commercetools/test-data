import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzBlueUsWarehouse preset`, () => {
  it(`should return a skuWw567YzBlueUsWarehouse preset when built for rest`, () => {
    const skuWw567YzBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzBlueUsWarehouse()
      .build();
    expect(skuWw567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueUsWarehouse preset when built for graphql`, () => {
    const skuWw567YzBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuWw567YzBlueUsWarehouse()
      .build();
    expect(skuWw567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
