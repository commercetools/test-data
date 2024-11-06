import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2023DefaultWarehouse preset`, () => {
  it(`should return a skuK567Yz2023DefaultWarehouse preset when built for rest`, () => {
    const skuK567Yz2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2023DefaultWarehouse()
      .build();
    expect(skuK567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023DefaultWarehouse preset when built for graphql`, () => {
    const skuK567Yz2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuK567Yz2023DefaultWarehouse()
        .build();
    expect(skuK567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
