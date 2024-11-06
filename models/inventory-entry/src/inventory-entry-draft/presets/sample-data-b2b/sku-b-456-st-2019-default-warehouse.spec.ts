import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuB456St2019DefaultWarehouse preset`, () => {
  it(`should return a skuB456St2019DefaultWarehouse preset when built for rest`, () => {
    const skuB456St2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuB456St2019DefaultWarehouse()
      .build();
    expect(skuB456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2019DefaultWarehouse preset when built for graphql`, () => {
    const skuB456St2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuB456St2019DefaultWarehouse()
        .build();
    expect(skuB456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuB456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuB456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuB456St2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuB456St2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
