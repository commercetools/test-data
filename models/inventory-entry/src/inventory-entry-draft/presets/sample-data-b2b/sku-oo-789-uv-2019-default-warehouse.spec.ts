import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOo789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuOo789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuOo789Uv2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuOo789Uv2019DefaultWarehouse()
      .build();
    expect(skuOo789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuOo789Uv2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuOo789Uv2019DefaultWarehouse()
        .build();
    expect(skuOo789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuOo789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOo789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuOo789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOo789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
