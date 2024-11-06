import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxBlueEuWarehouse preset`, () => {
  it(`should return a skuVv234WxBlueEuWarehouse preset when built for rest`, () => {
    const skuVv234WxBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxBlueEuWarehouse()
      .build();
    expect(skuVv234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueEuWarehouse preset when built for graphql`, () => {
    const skuVv234WxBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuVv234WxBlueEuWarehouse()
      .build();
    expect(skuVv234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
