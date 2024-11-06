import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2015UsWarehouse preset`, () => {
  it(`should return a skuK567Yz2015UsWarehouse preset when built for rest`, () => {
    const skuK567Yz2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2015UsWarehouse()
      .build();
    expect(skuK567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuK567Yz2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuK567Yz2015UsWarehouse()
      .build();
    expect(skuK567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
