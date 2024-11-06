import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxGreenDefaultWarehouse preset`, () => {
  it(`should return a skuHhh234WxGreenDefaultWarehouse preset when built for rest`, () => {
    const skuHhh234WxGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuHhh234WxGreenDefaultWarehouse()
        .build();
    expect(skuHhh234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuHhh234WxGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHhh234WxGreenDefaultWarehouse()
        .build();
    expect(skuHhh234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
