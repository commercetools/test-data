import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2015DefaultWarehouse preset`, () => {
  it(`should return a skuY567Yz2015DefaultWarehouse preset when built for rest`, () => {
    const skuY567Yz2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2015DefaultWarehouse()
      .build();
    expect(skuY567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015DefaultWarehouse preset when built for graphql`, () => {
    const skuY567Yz2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuY567Yz2015DefaultWarehouse()
        .build();
    expect(skuY567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
