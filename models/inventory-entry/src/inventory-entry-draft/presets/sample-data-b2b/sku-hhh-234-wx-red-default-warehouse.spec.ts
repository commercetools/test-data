import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxRedDefaultWarehouse preset`, () => {
  it(`should return a skuHhh234WxRedDefaultWarehouse preset when built for rest`, () => {
    const skuHhh234WxRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxRedDefaultWarehouse()
      .build();
    expect(skuHhh234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedDefaultWarehouse preset when built for graphql`, () => {
    const skuHhh234WxRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHhh234WxRedDefaultWarehouse()
        .build();
    expect(skuHhh234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
