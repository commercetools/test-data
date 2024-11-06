import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2015DefaultWarehouse preset`, () => {
  it(`should return a skuI789Uv2015DefaultWarehouse preset when built for rest`, () => {
    const skuI789Uv2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2015DefaultWarehouse()
      .build();
    expect(skuI789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015DefaultWarehouse preset when built for graphql`, () => {
    const skuI789Uv2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuI789Uv2015DefaultWarehouse()
        .build();
    expect(skuI789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
