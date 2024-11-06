import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuW789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuW789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuW789Uv2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuW789Uv2019DefaultWarehouse()
      .build();
    expect(skuW789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuW789Uv2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuW789Uv2019DefaultWarehouse()
        .build();
    expect(skuW789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuW789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuW789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuW789Uv2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuW789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
