import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2023DefaultWarehouse preset`, () => {
  it(`should return a skuC789Uv2023DefaultWarehouse preset when built for rest`, () => {
    const skuC789Uv2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2023DefaultWarehouse()
      .build();
    expect(skuC789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023DefaultWarehouse preset when built for graphql`, () => {
    const skuC789Uv2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuC789Uv2023DefaultWarehouse()
        .build();
    expect(skuC789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
