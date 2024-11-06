import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCc789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuCc789Uv2019DefaultWarehouse()
      .build();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuCc789Uv2019DefaultWarehouse()
        .build();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
