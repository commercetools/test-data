import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxBlueEuWarehouse preset`, () => {
  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for rest`, () => {
    const skuBbb234WxBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxBlueEuWarehouse()
      .build();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for graphql`, () => {
    const skuBbb234WxBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBbb234WxBlueEuWarehouse()
      .build();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
