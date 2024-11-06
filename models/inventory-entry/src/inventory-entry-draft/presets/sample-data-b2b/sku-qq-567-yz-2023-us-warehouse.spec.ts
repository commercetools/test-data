import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuQq567Yz2023UsWarehouse preset`, () => {
  it(`should return a skuQq567Yz2023UsWarehouse preset when built for rest`, () => {
    const skuQq567Yz2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuQq567Yz2023UsWarehouse()
      .build();
    expect(skuQq567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2023UsWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuQq567Yz2023UsWarehouse()
      .build();
    expect(skuQq567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2023UsWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
