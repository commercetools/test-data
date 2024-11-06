import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2023EuWarehouse preset`, () => {
  it(`should return a skuH456St2023EuWarehouse preset when built for rest`, () => {
    const skuH456St2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2023EuWarehouse()
      .build();
    expect(skuH456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2023EuWarehouse preset when built for graphql`, () => {
    const skuH456St2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuH456St2023EuWarehouse()
      .build();
    expect(skuH456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2023EuWarehouse preset when built for legacy rest`, () => {
    const skuH456St2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
