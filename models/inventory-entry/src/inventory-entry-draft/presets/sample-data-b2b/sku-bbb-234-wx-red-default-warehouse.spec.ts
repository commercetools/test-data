import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxRedDefaultWarehouse preset`, () => {
  it(`should return a skuBbb234WxRedDefaultWarehouse preset when built for rest`, () => {
    const skuBbb234WxRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxRedDefaultWarehouse()
      .build();
    expect(skuBbb234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedDefaultWarehouse preset when built for graphql`, () => {
    const skuBbb234WxRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuBbb234WxRedDefaultWarehouse()
        .build();
    expect(skuBbb234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
