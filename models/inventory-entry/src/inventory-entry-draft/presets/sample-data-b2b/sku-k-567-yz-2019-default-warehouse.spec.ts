import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2019DefaultWarehouse preset`, () => {
  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for rest`, () => {
    const skuK567Yz2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2019DefaultWarehouse()
      .build();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for graphql`, () => {
    const skuK567Yz2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuK567Yz2019DefaultWarehouse()
        .build();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
