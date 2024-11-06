import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxRedEuWarehouse preset`, () => {
  it(`should return a skuHhh234WxRedEuWarehouse preset when built for rest`, () => {
    const skuHhh234WxRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxRedEuWarehouse()
      .build();
    expect(skuHhh234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedEuWarehouse preset when built for graphql`, () => {
    const skuHhh234WxRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHhh234WxRedEuWarehouse()
      .build();
    expect(skuHhh234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedEuWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
