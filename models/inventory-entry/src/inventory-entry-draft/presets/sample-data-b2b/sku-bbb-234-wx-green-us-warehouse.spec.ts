import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxGreenUsWarehouse preset`, () => {
  it(`should return a skuBbb234WxGreenUsWarehouse preset when built for rest`, () => {
    const skuBbb234WxGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxGreenUsWarehouse()
      .build();
    expect(skuBbb234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenUsWarehouse preset when built for graphql`, () => {
    const skuBbb234WxGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBbb234WxGreenUsWarehouse()
      .build();
    expect(skuBbb234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
