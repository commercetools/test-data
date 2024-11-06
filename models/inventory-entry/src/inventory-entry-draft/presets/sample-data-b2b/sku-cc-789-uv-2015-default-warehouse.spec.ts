import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCc789Uv2015DefaultWarehouse preset`, () => {
  it(`should return a skuCc789Uv2015DefaultWarehouse preset when built for rest`, () => {
    const skuCc789Uv2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuCc789Uv2015DefaultWarehouse()
      .build();
    expect(skuCc789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015DefaultWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuCc789Uv2015DefaultWarehouse()
        .build();
    expect(skuCc789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
