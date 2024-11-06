import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2019EuWarehouse preset`, () => {
  it(`should return a skuA789Bc2019EuWarehouse preset when built for rest`, () => {
    const skuA789Bc2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2019EuWarehouse()
      .build();
    expect(skuA789Bc2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019EuWarehouse preset when built for graphql`, () => {
    const skuA789Bc2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuA789Bc2019EuWarehouse()
      .build();
    expect(skuA789Bc2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019EuWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
