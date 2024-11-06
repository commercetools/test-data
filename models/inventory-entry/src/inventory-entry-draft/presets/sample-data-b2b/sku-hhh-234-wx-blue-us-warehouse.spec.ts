import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxBlueUsWarehouse preset`, () => {
  it(`should return a skuHhh234WxBlueUsWarehouse preset when built for rest`, () => {
    const skuHhh234WxBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxBlueUsWarehouse()
      .build();
    expect(skuHhh234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueUsWarehouse preset when built for graphql`, () => {
    const skuHhh234WxBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHhh234WxBlueUsWarehouse()
      .build();
    expect(skuHhh234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
