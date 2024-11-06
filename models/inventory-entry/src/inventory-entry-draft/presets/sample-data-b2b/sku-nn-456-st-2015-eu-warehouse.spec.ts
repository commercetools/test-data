import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNn456St2015EuWarehouse preset`, () => {
  it(`should return a skuNn456St2015EuWarehouse preset when built for rest`, () => {
    const skuNn456St2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuNn456St2015EuWarehouse()
      .build();
    expect(skuNn456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2015EuWarehouse preset when built for graphql`, () => {
    const skuNn456St2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuNn456St2015EuWarehouse()
      .build();
    expect(skuNn456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuNn456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNn456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuNn456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNn456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
