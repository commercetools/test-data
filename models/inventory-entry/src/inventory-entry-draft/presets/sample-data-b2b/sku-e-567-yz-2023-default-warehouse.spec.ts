import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuE567Yz2023DefaultWarehouse preset`, () => {
  it(`should return a skuE567Yz2023DefaultWarehouse preset when built for rest`, () => {
    const skuE567Yz2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuE567Yz2023DefaultWarehouse()
      .build();
    expect(skuE567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2023DefaultWarehouse preset when built for graphql`, () => {
    const skuE567Yz2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuE567Yz2023DefaultWarehouse()
        .build();
    expect(skuE567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
