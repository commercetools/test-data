import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxGreenUsWarehouse preset`, () => {
  it(`should return a skuVv234WxGreenUsWarehouse preset when built for rest`, () => {
    const skuVv234WxGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxGreenUsWarehouse()
      .build();
    expect(skuVv234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenUsWarehouse preset when built for graphql`, () => {
    const skuVv234WxGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuVv234WxGreenUsWarehouse()
      .build();
    expect(skuVv234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
