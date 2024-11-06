import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzRedUsWarehouse preset`, () => {
  it(`should return a skuWw567YzRedUsWarehouse preset when built for rest`, () => {
    const skuWw567YzRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzRedUsWarehouse()
      .build();
    expect(skuWw567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedUsWarehouse preset when built for graphql`, () => {
    const skuWw567YzRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuWw567YzRedUsWarehouse()
      .build();
    expect(skuWw567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedUsWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
