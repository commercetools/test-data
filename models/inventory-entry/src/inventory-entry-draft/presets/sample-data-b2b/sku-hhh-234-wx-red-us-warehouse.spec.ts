import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxRedUsWarehouse preset`, () => {
  it(`should return a skuHhh234WxRedUsWarehouse preset when built for rest`, () => {
    const skuHhh234WxRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxRedUsWarehouse()
      .build();
    expect(skuHhh234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedUsWarehouse preset when built for graphql`, () => {
    const skuHhh234WxRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHhh234WxRedUsWarehouse()
      .build();
    expect(skuHhh234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedUsWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
