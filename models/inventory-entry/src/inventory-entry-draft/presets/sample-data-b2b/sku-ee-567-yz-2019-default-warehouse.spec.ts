import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEe567Yz2019DefaultWarehouse preset`, () => {
  it(`should return a skuEe567Yz2019DefaultWarehouse preset when built for rest`, () => {
    const skuEe567Yz2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuEe567Yz2019DefaultWarehouse()
      .build();
    expect(skuEe567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2019DefaultWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuEe567Yz2019DefaultWarehouse()
        .build();
    expect(skuEe567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
