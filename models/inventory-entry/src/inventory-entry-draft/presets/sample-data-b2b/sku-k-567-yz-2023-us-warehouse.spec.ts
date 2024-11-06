import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2023UsWarehouse preset`, () => {
  it(`should return a skuK567Yz2023UsWarehouse preset when built for rest`, () => {
    const skuK567Yz2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2023UsWarehouse()
      .build();
    expect(skuK567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023UsWarehouse preset when built for graphql`, () => {
    const skuK567Yz2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuK567Yz2023UsWarehouse()
      .build();
    expect(skuK567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023UsWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
