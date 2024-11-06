import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2015EuWarehouse preset`, () => {
  it(`should return a skuH456St2015EuWarehouse preset when built for rest`, () => {
    const skuH456St2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2015EuWarehouse()
      .build();
    expect(skuH456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015EuWarehouse preset when built for graphql`, () => {
    const skuH456St2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuH456St2015EuWarehouse()
      .build();
    expect(skuH456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuH456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
