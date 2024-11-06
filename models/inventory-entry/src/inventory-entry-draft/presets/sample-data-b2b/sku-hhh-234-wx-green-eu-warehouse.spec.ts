import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxGreenEuWarehouse preset`, () => {
  it(`should return a skuHhh234WxGreenEuWarehouse preset when built for rest`, () => {
    const skuHhh234WxGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxGreenEuWarehouse()
      .build();
    expect(skuHhh234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenEuWarehouse preset when built for graphql`, () => {
    const skuHhh234WxGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHhh234WxGreenEuWarehouse()
      .build();
    expect(skuHhh234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
