import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzRedUsWarehouse preset`, () => {
  it(`should return a skuIii567YzRedUsWarehouse preset when built for rest`, () => {
    const skuIii567YzRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzRedUsWarehouse()
      .build();
    expect(skuIii567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedUsWarehouse preset when built for graphql`, () => {
    const skuIii567YzRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIii567YzRedUsWarehouse()
      .build();
    expect(skuIii567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedUsWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
