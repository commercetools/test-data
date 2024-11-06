import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuB456St2015EuWarehouse preset`, () => {
  it(`should return a skuB456St2015EuWarehouse preset when built for rest`, () => {
    const skuB456St2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuB456St2015EuWarehouse()
      .build();
    expect(skuB456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015EuWarehouse preset when built for graphql`, () => {
    const skuB456St2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuB456St2015EuWarehouse()
      .build();
    expect(skuB456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuB456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuB456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuB456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuB456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
