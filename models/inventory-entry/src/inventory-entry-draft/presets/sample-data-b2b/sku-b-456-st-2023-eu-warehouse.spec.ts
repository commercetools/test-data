import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuB456St2023EuWarehouse preset`, () => {
  it(`should return a skuB456St2023EuWarehouse preset when built for rest`, () => {
    const skuB456St2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuB456St2023EuWarehouse()
      .build();
    expect(skuB456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2023EuWarehouse preset when built for graphql`, () => {
    const skuB456St2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuB456St2023EuWarehouse()
      .build();
    expect(skuB456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2023EuWarehouse preset when built for legacy rest`, () => {
    const skuB456St2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuB456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuB456St2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuB456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
