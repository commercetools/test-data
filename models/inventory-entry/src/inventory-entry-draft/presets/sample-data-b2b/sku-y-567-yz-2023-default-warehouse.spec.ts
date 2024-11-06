import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2023DefaultWarehouse preset`, () => {
  it(`should return a skuY567Yz2023DefaultWarehouse preset when built for rest`, () => {
    const skuY567Yz2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2023DefaultWarehouse()
      .build();
    expect(skuY567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023DefaultWarehouse preset when built for graphql`, () => {
    const skuY567Yz2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuY567Yz2023DefaultWarehouse()
        .build();
    expect(skuY567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
