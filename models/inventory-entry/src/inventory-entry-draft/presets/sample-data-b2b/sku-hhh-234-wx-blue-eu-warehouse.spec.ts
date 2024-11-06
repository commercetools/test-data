import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxBlueEuWarehouse preset`, () => {
  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for rest`, () => {
    const skuHhh234WxBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxBlueEuWarehouse()
      .build();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for graphql`, () => {
    const skuHhh234WxBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHhh234WxBlueEuWarehouse()
      .build();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
