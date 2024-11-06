import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuS567Uv2023UsWarehouse preset`, () => {
  it(`should return a skuS567Uv2023UsWarehouse preset when built for rest`, () => {
    const skuS567Uv2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuS567Uv2023UsWarehouse()
      .build();
    expect(skuS567Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2023UsWarehouse preset when built for graphql`, () => {
    const skuS567Uv2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuS567Uv2023UsWarehouse()
      .build();
    expect(skuS567Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2023UsWarehouse preset when built for legacy rest`, () => {
    const skuS567Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuS567Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuS567Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuS567Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
