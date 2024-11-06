import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2023DefaultWarehouse preset`, () => {
  it(`should return a skuIi789Uv2023DefaultWarehouse preset when built for rest`, () => {
    const skuIi789Uv2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2023DefaultWarehouse()
      .build();
    expect(skuIi789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2023DefaultWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuIi789Uv2023DefaultWarehouse()
        .build();
    expect(skuIi789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
