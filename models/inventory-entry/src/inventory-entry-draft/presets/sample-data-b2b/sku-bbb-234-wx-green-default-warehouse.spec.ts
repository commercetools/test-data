import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxGreenDefaultWarehouse preset`, () => {
  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for rest`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuBbb234WxGreenDefaultWarehouse()
        .build();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuBbb234WxGreenDefaultWarehouse()
        .build();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
