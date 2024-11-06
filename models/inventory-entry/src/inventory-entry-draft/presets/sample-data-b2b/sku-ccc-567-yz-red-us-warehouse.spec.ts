import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzRedUsWarehouse preset`, () => {
  it(`should return a skuCcc567YzRedUsWarehouse preset when built for rest`, () => {
    const skuCcc567YzRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzRedUsWarehouse()
      .build();
    expect(skuCcc567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedUsWarehouse preset when built for graphql`, () => {
    const skuCcc567YzRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCcc567YzRedUsWarehouse()
      .build();
    expect(skuCcc567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedUsWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
