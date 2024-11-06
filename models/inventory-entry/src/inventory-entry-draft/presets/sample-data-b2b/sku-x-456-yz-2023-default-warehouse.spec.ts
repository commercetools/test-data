import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX456Yz2023DefaultWarehouse preset`, () => {
  it(`should return a skuX456Yz2023DefaultWarehouse preset when built for rest`, () => {
    const skuX456Yz2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuX456Yz2023DefaultWarehouse()
      .build();
    expect(skuX456Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023DefaultWarehouse preset when built for graphql`, () => {
    const skuX456Yz2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuX456Yz2023DefaultWarehouse()
        .build();
    expect(skuX456Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
