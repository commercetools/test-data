import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2023UsWarehouse preset`, () => {
  it(`should return a skuY567Yz2023UsWarehouse preset when built for rest`, () => {
    const skuY567Yz2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2023UsWarehouse()
      .build();
    expect(skuY567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023UsWarehouse preset when built for graphql`, () => {
    const skuY567Yz2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuY567Yz2023UsWarehouse()
      .build();
    expect(skuY567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023UsWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
