import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX456Yz2015UsWarehouse preset`, () => {
  it(`should return a skuX456Yz2015UsWarehouse preset when built for rest`, () => {
    const skuX456Yz2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuX456Yz2015UsWarehouse()
      .build();
    expect(skuX456Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuX456Yz2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX456Yz2015UsWarehouse()
      .build();
    expect(skuX456Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
