import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2023UsWarehouse preset`, () => {
  it(`should return a skuI789Uv2023UsWarehouse preset when built for rest`, () => {
    const skuI789Uv2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2023UsWarehouse()
      .build();
    expect(skuI789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2023UsWarehouse preset when built for graphql`, () => {
    const skuI789Uv2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuI789Uv2023UsWarehouse()
      .build();
    expect(skuI789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2023UsWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
