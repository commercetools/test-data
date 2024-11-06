import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuX456Yz2019EuWarehouse preset`, () => {
  it(`should return a skuX456Yz2019EuWarehouse preset when built for rest`, () => {
    const skuX456Yz2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuX456Yz2019EuWarehouse()
      .build();
    expect(skuX456Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2019EuWarehouse preset when built for graphql`, () => {
    const skuX456Yz2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuX456Yz2019EuWarehouse()
      .build();
    expect(skuX456Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2019EuWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuX456Yz2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuX456Yz2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
