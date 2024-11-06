import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxRedEuWarehouse preset`, () => {
  it(`should return a skuBbb234WxRedEuWarehouse preset when built for rest`, () => {
    const skuBbb234WxRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxRedEuWarehouse()
      .build();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedEuWarehouse preset when built for graphql`, () => {
    const skuBbb234WxRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBbb234WxRedEuWarehouse()
      .build();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedEuWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
