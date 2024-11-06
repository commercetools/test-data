import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX456Yz2015DefaultWarehouse preset`, () => {
  it(`should return a skuX456Yz2015DefaultWarehouse preset when built for rest`, () => {
    const skuX456Yz2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuX456Yz2015DefaultWarehouse()
      .build();
    expect(skuX456Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2015DefaultWarehouse preset when built for graphql`, () => {
    const skuX456Yz2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuX456Yz2015DefaultWarehouse()
        .build();
    expect(skuX456Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
