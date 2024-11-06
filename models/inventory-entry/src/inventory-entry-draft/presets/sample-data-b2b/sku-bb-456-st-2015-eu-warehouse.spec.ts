import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBb456St2015EuWarehouse preset`, () => {
  it(`should return a skuBb456St2015EuWarehouse preset when built for rest`, () => {
    const skuBb456St2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuBb456St2015EuWarehouse()
      .build();
    expect(skuBb456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2015EuWarehouse preset when built for graphql`, () => {
    const skuBb456St2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBb456St2015EuWarehouse()
      .build();
    expect(skuBb456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuBb456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBb456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuBb456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBb456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
