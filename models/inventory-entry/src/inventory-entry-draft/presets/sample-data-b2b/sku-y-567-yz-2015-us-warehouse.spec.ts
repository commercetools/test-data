import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2015UsWarehouse preset`, () => {
  it(`should return a skuY567Yz2015UsWarehouse preset when built for rest`, () => {
    const skuY567Yz2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2015UsWarehouse()
      .build();
    expect(skuY567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuY567Yz2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuY567Yz2015UsWarehouse()
      .build();
    expect(skuY567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
