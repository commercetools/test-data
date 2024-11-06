import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuS567Uv2015UsWarehouse preset`, () => {
  it(`should return a skuS567Uv2015UsWarehouse preset when built for rest`, () => {
    const skuS567Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuS567Uv2015UsWarehouse()
      .build();
    expect(skuS567Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuS567Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuS567Uv2015UsWarehouse()
      .build();
    expect(skuS567Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuS567Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuS567Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuS567Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuS567Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
