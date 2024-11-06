import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuKk567Yz2023DefaultWarehouse preset`, () => {
  it(`should return a skuKk567Yz2023DefaultWarehouse preset when built for rest`, () => {
    const skuKk567Yz2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuKk567Yz2023DefaultWarehouse()
      .build();
    expect(skuKk567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023DefaultWarehouse preset when built for graphql`, () => {
    const skuKk567Yz2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuKk567Yz2023DefaultWarehouse()
        .build();
    expect(skuKk567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuKk567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuKk567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuKk567Yz2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuKk567Yz2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
