import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuIi789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuIi789Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2015UsWarehouse()
      .build();
    expect(skuIi789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIi789Uv2015UsWarehouse()
      .build();
    expect(skuIi789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
