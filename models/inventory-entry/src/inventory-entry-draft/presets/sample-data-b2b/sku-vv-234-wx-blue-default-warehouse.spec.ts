import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxBlueDefaultWarehouse preset`, () => {
  it(`should return a skuVv234WxBlueDefaultWarehouse preset when built for rest`, () => {
    const skuVv234WxBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxBlueDefaultWarehouse()
      .build();
    expect(skuVv234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuVv234WxBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuVv234WxBlueDefaultWarehouse()
        .build();
    expect(skuVv234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
