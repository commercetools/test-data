import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuW789Uv2015DefaultWarehouse preset`, () => {
  it(`should return a skuW789Uv2015DefaultWarehouse preset when built for rest`, () => {
    const skuW789Uv2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuW789Uv2015DefaultWarehouse()
      .build();
    expect(skuW789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015DefaultWarehouse preset when built for graphql`, () => {
    const skuW789Uv2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuW789Uv2015DefaultWarehouse()
        .build();
    expect(skuW789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuW789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuW789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuW789Uv2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuW789Uv2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
