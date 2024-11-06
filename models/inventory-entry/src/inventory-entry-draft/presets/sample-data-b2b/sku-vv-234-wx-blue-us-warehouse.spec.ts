import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxBlueUsWarehouse preset`, () => {
  it(`should return a skuVv234WxBlueUsWarehouse preset when built for rest`, () => {
    const skuVv234WxBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxBlueUsWarehouse()
      .build();
    expect(skuVv234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueUsWarehouse preset when built for graphql`, () => {
    const skuVv234WxBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuVv234WxBlueUsWarehouse()
      .build();
    expect(skuVv234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
