import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2019DefaultWarehouse preset`, () => {
  it(`should return a skuY567Yz2019DefaultWarehouse preset when built for rest`, () => {
    const skuY567Yz2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2019DefaultWarehouse()
      .build();
    expect(skuY567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2019DefaultWarehouse preset when built for graphql`, () => {
    const skuY567Yz2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuY567Yz2019DefaultWarehouse()
        .build();
    expect(skuY567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
