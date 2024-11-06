import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHhh234WxGreenUsWarehouse preset`, () => {
  it(`should return a skuHhh234WxGreenUsWarehouse preset when built for rest`, () => {
    const skuHhh234WxGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuHhh234WxGreenUsWarehouse()
      .build();
    expect(skuHhh234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenUsWarehouse preset when built for graphql`, () => {
    const skuHhh234WxGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHhh234WxGreenUsWarehouse()
      .build();
    expect(skuHhh234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHhh234WxGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuHhh234WxGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
