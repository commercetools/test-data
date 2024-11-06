import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2015DefaultWarehouse preset`, () => {
  it(`should return a skuK567Yz2015DefaultWarehouse preset when built for rest`, () => {
    const skuK567Yz2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2015DefaultWarehouse()
      .build();
    expect(skuK567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015DefaultWarehouse preset when built for graphql`, () => {
    const skuK567Yz2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuK567Yz2015DefaultWarehouse()
        .build();
    expect(skuK567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
