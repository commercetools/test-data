import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX456Yz2023EuWarehouse preset`, () => {
  it(`should return a skuX456Yz2023EuWarehouse preset when built for rest`, () => {
    const skuX456Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuX456Yz2023EuWarehouse()
      .build();
    expect(skuX456Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuX456Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX456Yz2023EuWarehouse()
      .build();
    expect(skuX456Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
