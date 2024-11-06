import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuV456St2019EuWarehouse preset`, () => {
  it(`should return a skuV456St2019EuWarehouse preset when built for rest`, () => {
    const skuV456St2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuV456St2019EuWarehouse()
      .build();
    expect(skuV456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2019EuWarehouse preset when built for graphql`, () => {
    const skuV456St2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuV456St2019EuWarehouse()
      .build();
    expect(skuV456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2019EuWarehouse preset when built for legacy rest`, () => {
    const skuV456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuV456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuV456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuV456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
