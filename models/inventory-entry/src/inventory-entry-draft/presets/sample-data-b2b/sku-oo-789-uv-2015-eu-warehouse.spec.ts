import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOo789Uv2015EuWarehouse preset`, () => {
  it(`should return a skuOo789Uv2015EuWarehouse preset when built for rest`, () => {
    const skuOo789Uv2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuOo789Uv2015EuWarehouse()
      .build();
    expect(skuOo789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2015EuWarehouse preset when built for graphql`, () => {
    const skuOo789Uv2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuOo789Uv2015EuWarehouse()
      .build();
    expect(skuOo789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2015EuWarehouse preset when built for legacy rest`, () => {
    const skuOo789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOo789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuOo789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOo789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
