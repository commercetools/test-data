import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxGreenDefaultWarehouse preset`, () => {
  it(`should return a skuVv234WxGreenDefaultWarehouse preset when built for rest`, () => {
    const skuVv234WxGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuVv234WxGreenDefaultWarehouse().build();
    expect(skuVv234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuVv234WxGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuVv234WxGreenDefaultWarehouse()
        .build();
    expect(skuVv234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
