import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuIi789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuIi789Uv2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2019DefaultWarehouse()
      .build();
    expect(skuIi789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuIi789Uv2019DefaultWarehouse()
        .build();
    expect(skuIi789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
