import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxRedDefaultWarehouse preset`, () => {
  it(`should return a skuVv234WxRedDefaultWarehouse preset when built for rest`, () => {
    const skuVv234WxRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxRedDefaultWarehouse()
      .build();
    expect(skuVv234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedDefaultWarehouse preset when built for graphql`, () => {
    const skuVv234WxRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuVv234WxRedDefaultWarehouse()
        .build();
    expect(skuVv234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
