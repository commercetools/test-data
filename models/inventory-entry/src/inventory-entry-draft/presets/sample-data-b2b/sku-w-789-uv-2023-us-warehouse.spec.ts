import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuW789Uv2023UsWarehouse preset`, () => {
  it(`should return a skuW789Uv2023UsWarehouse preset when built for rest`, () => {
    const skuW789Uv2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuW789Uv2023UsWarehouse()
      .build();
    expect(skuW789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2023UsWarehouse preset when built for graphql`, () => {
    const skuW789Uv2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuW789Uv2023UsWarehouse()
      .build();
    expect(skuW789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2023UsWarehouse preset when built for legacy rest`, () => {
    const skuW789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuW789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuW789Uv2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuW789Uv2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
