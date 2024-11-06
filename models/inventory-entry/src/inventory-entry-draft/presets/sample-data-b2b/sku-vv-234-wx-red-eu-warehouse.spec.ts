import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxRedEuWarehouse preset`, () => {
  it(`should return a skuVv234WxRedEuWarehouse preset when built for rest`, () => {
    const skuVv234WxRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxRedEuWarehouse()
      .build();
    expect(skuVv234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedEuWarehouse preset when built for graphql`, () => {
    const skuVv234WxRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuVv234WxRedEuWarehouse()
      .build();
    expect(skuVv234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedEuWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
