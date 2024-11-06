import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxBlueUsWarehouse preset`, () => {
  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for rest`, () => {
    const skuBbb234WxBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxBlueUsWarehouse()
      .build();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for graphql`, () => {
    const skuBbb234WxBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBbb234WxBlueUsWarehouse()
      .build();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
