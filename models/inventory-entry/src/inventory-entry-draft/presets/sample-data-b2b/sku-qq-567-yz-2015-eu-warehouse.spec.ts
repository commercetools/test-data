import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuQq567Yz2015EuWarehouse preset`, () => {
  it(`should return a skuQq567Yz2015EuWarehouse preset when built for rest`, () => {
    const skuQq567Yz2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuQq567Yz2015EuWarehouse()
      .build();
    expect(skuQq567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuQq567Yz2015EuWarehouse()
      .build();
    expect(skuQq567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
