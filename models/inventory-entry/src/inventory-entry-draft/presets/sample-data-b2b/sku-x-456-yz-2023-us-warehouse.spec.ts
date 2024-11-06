import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX456Yz2023UsWarehouse preset`, () => {
  it(`should return a skuX456Yz2023UsWarehouse preset when built for rest`, () => {
    const skuX456Yz2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuX456Yz2023UsWarehouse()
      .build();
    expect(skuX456Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023UsWarehouse preset when built for graphql`, () => {
    const skuX456Yz2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX456Yz2023UsWarehouse()
      .build();
    expect(skuX456Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023UsWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
