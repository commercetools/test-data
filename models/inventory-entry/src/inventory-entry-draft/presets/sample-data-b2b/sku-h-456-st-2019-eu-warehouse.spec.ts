import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2019EuWarehouse preset`, () => {
  it(`should return a skuH456St2019EuWarehouse preset when built for rest`, () => {
    const skuH456St2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2019EuWarehouse()
      .build();
    expect(skuH456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2019EuWarehouse preset when built for graphql`, () => {
    const skuH456St2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuH456St2019EuWarehouse()
      .build();
    expect(skuH456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2019EuWarehouse preset when built for legacy rest`, () => {
    const skuH456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
