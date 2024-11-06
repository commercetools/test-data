import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxBlueDefaultWarehouse preset`, () => {
  it(`should return a skuBbb234WxBlueDefaultWarehouse preset when built for rest`, () => {
    const skuBbb234WxBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuBbb234WxBlueDefaultWarehouse().build();
    expect(skuBbb234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuBbb234WxBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuBbb234WxBlueDefaultWarehouse()
        .build();
    expect(skuBbb234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
