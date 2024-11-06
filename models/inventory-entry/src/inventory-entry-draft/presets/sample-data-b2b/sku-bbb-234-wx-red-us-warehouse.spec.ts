import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxRedUsWarehouse preset`, () => {
  it(`should return a skuBbb234WxRedUsWarehouse preset when built for rest`, () => {
    const skuBbb234WxRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxRedUsWarehouse()
      .build();
    expect(skuBbb234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedUsWarehouse preset when built for graphql`, () => {
    const skuBbb234WxRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBbb234WxRedUsWarehouse()
      .build();
    expect(skuBbb234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedUsWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
