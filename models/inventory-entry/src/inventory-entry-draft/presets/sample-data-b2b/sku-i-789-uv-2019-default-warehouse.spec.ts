import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuI789Uv2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2019DefaultWarehouse()
      .build();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuI789Uv2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuI789Uv2019DefaultWarehouse()
        .build();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
