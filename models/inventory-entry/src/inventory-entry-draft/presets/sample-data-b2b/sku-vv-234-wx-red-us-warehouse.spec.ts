import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxRedUsWarehouse preset`, () => {
  it(`should return a skuVv234WxRedUsWarehouse preset when built for rest`, () => {
    const skuVv234WxRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxRedUsWarehouse()
      .build();
    expect(skuVv234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedUsWarehouse preset when built for graphql`, () => {
    const skuVv234WxRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuVv234WxRedUsWarehouse()
      .build();
    expect(skuVv234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedUsWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
