import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2015EuWarehouse preset`, () => {
  it(`should return a skuIi789Uv2015EuWarehouse preset when built for rest`, () => {
    const skuIi789Uv2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2015EuWarehouse()
      .build();
    expect(skuIi789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015EuWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIi789Uv2015EuWarehouse()
      .build();
    expect(skuIi789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015EuWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
