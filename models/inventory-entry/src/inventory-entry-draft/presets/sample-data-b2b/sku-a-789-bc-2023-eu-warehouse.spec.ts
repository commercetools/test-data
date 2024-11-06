import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2023EuWarehouse preset`, () => {
  it(`should return a skuA789Bc2023EuWarehouse preset when built for rest`, () => {
    const skuA789Bc2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2023EuWarehouse()
      .build();
    expect(skuA789Bc2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023EuWarehouse preset when built for graphql`, () => {
    const skuA789Bc2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuA789Bc2023EuWarehouse()
      .build();
    expect(skuA789Bc2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023EuWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
