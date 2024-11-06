import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2015DefaultWarehouse preset`, () => {
  it(`should return a skuIi789Uv2015DefaultWarehouse preset when built for rest`, () => {
    const skuIi789Uv2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2015DefaultWarehouse()
      .build();
    expect(skuIi789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015DefaultWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuIi789Uv2015DefaultWarehouse()
        .build();
    expect(skuIi789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
