import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuB456St2023UsWarehouse preset`, () => {
  it(`should return a skuB456St2023UsWarehouse preset when built for rest`, () => {
    const skuB456St2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuB456St2023UsWarehouse()
      .build();
    expect(skuB456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2023UsWarehouse preset when built for graphql`, () => {
    const skuB456St2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuB456St2023UsWarehouse()
      .build();
    expect(skuB456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2023UsWarehouse preset when built for legacy rest`, () => {
    const skuB456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuB456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuB456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuB456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
