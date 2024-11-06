import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuQq567Yz2015DefaultWarehouse preset`, () => {
  it(`should return a skuQq567Yz2015DefaultWarehouse preset when built for rest`, () => {
    const skuQq567Yz2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuQq567Yz2015DefaultWarehouse()
      .build();
    expect(skuQq567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015DefaultWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuQq567Yz2015DefaultWarehouse()
        .build();
    expect(skuQq567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
