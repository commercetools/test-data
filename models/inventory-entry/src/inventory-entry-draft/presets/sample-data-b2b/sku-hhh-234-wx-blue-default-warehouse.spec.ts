import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxBlueDefaultWarehouse preset`, () => {
  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for rest`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuHhh234WxBlueDefaultWarehouse().build();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHhh234WxBlueDefaultWarehouse()
        .build();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
