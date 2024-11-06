import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBbb234WxGreenEuWarehouse preset`, () => {
  it(`should return a skuBbb234WxGreenEuWarehouse preset when built for rest`, () => {
    const skuBbb234WxGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuBbb234WxGreenEuWarehouse()
      .build();
    expect(skuBbb234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenEuWarehouse preset when built for graphql`, () => {
    const skuBbb234WxGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBbb234WxGreenEuWarehouse()
      .build();
    expect(skuBbb234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBbb234WxGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuBbb234WxGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
