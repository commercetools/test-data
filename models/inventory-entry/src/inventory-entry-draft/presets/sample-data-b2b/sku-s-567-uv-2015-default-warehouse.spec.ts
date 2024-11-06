import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuS567Uv2015DefaultWarehouse preset`, () => {
  it(`should return a skuS567Uv2015DefaultWarehouse preset when built for rest`, () => {
    const skuS567Uv2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuS567Uv2015DefaultWarehouse()
      .build();
    expect(skuS567Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2015DefaultWarehouse preset when built for graphql`, () => {
    const skuS567Uv2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuS567Uv2015DefaultWarehouse()
        .build();
    expect(skuS567Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuS567Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuS567Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuS567Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuS567Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
