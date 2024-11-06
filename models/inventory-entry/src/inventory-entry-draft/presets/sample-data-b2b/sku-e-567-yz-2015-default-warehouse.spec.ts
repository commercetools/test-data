import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuE567Yz2015DefaultWarehouse preset`, () => {
  it(`should return a skuE567Yz2015DefaultWarehouse preset when built for rest`, () => {
    const skuE567Yz2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuE567Yz2015DefaultWarehouse()
      .build();
    expect(skuE567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2015DefaultWarehouse preset when built for graphql`, () => {
    const skuE567Yz2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuE567Yz2015DefaultWarehouse()
        .build();
    expect(skuE567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
