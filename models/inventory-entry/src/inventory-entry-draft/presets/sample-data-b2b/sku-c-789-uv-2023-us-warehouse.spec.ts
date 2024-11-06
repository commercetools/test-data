import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2023UsWarehouse preset`, () => {
  it(`should return a skuC789Uv2023UsWarehouse preset when built for rest`, () => {
    const skuC789Uv2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2023UsWarehouse()
      .build();
    expect(skuC789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023UsWarehouse preset when built for graphql`, () => {
    const skuC789Uv2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuC789Uv2023UsWarehouse()
      .build();
    expect(skuC789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023UsWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
