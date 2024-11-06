import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuC789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuC789Uv2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2019DefaultWarehouse()
      .build();
    expect(skuC789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuC789Uv2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuC789Uv2019DefaultWarehouse()
        .build();
    expect(skuC789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
