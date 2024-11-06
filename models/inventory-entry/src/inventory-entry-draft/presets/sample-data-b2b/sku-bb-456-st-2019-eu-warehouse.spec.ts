import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBb456St2019EuWarehouse preset`, () => {
  it(`should return a skuBb456St2019EuWarehouse preset when built for rest`, () => {
    const skuBb456St2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuBb456St2019EuWarehouse()
      .build();
    expect(skuBb456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019EuWarehouse preset when built for graphql`, () => {
    const skuBb456St2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBb456St2019EuWarehouse()
      .build();
    expect(skuBb456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019EuWarehouse preset when built for legacy rest`, () => {
    const skuBb456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBb456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBb456St2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuBb456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuBb456St2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBb456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
