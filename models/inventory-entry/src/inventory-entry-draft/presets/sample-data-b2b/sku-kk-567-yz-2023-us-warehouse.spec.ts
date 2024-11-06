import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuKk567Yz2023UsWarehouse preset`, () => {
  it(`should return a skuKk567Yz2023UsWarehouse preset when built for rest`, () => {
    const skuKk567Yz2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuKk567Yz2023UsWarehouse()
      .build();
    expect(skuKk567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023UsWarehouse preset when built for graphql`, () => {
    const skuKk567Yz2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuKk567Yz2023UsWarehouse()
      .build();
    expect(skuKk567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023UsWarehouse preset when built for legacy rest`, () => {
    const skuKk567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuKk567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuKk567Yz2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuKk567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuKk567Yz2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuKk567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
