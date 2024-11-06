import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEe567Yz2023DefaultWarehouse preset`, () => {
  it(`should return a skuEe567Yz2023DefaultWarehouse preset when built for rest`, () => {
    const skuEe567Yz2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuEe567Yz2023DefaultWarehouse()
      .build();
    expect(skuEe567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2023DefaultWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuEe567Yz2023DefaultWarehouse()
        .build();
    expect(skuEe567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEe567Yz2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEe567Yz2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
