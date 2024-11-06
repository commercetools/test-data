import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuB456St2015DefaultWarehouse preset`, () => {
  it(`should return a skuB456St2015DefaultWarehouse preset when built for rest`, () => {
    const skuB456St2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuB456St2015DefaultWarehouse()
      .build();
    expect(skuB456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015DefaultWarehouse preset when built for graphql`, () => {
    const skuB456St2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuB456St2015DefaultWarehouse()
        .build();
    expect(skuB456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuB456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuB456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuB456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuB456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
