import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2015EuWarehouse preset`, () => {
  it(`should return a skuI789Uv2015EuWarehouse preset when built for rest`, () => {
    const skuI789Uv2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2015EuWarehouse()
      .build();
    expect(skuI789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015EuWarehouse preset when built for graphql`, () => {
    const skuI789Uv2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuI789Uv2015EuWarehouse()
      .build();
    expect(skuI789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015EuWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
