import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuQq567Yz2015UsWarehouse preset`, () => {
  it(`should return a skuQq567Yz2015UsWarehouse preset when built for rest`, () => {
    const skuQq567Yz2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuQq567Yz2015UsWarehouse()
      .build();
    expect(skuQq567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuQq567Yz2015UsWarehouse()
      .build();
    expect(skuQq567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
