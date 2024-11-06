import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2015EuWarehouse preset`, () => {
  it(`should return a skuA789Bc2015EuWarehouse preset when built for rest`, () => {
    const skuA789Bc2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2015EuWarehouse()
      .build();
    expect(skuA789Bc2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015EuWarehouse preset when built for graphql`, () => {
    const skuA789Bc2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuA789Bc2015EuWarehouse()
      .build();
    expect(skuA789Bc2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015EuWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
