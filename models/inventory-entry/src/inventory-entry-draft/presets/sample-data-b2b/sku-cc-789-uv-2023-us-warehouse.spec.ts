import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCc789Uv2023UsWarehouse preset`, () => {
  it(`should return a skuCc789Uv2023UsWarehouse preset when built for rest`, () => {
    const skuCc789Uv2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuCc789Uv2023UsWarehouse()
      .build();
    expect(skuCc789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2023UsWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCc789Uv2023UsWarehouse()
      .build();
    expect(skuCc789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2023UsWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
