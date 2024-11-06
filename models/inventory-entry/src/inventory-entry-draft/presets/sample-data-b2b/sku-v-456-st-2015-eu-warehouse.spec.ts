import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuV456St2015EuWarehouse preset`, () => {
  it(`should return a skuV456St2015EuWarehouse preset when built for rest`, () => {
    const skuV456St2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuV456St2015EuWarehouse()
      .build();
    expect(skuV456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2015EuWarehouse preset when built for graphql`, () => {
    const skuV456St2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuV456St2015EuWarehouse()
      .build();
    expect(skuV456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuV456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuV456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuV456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuV456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
