import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2015EuWarehouse preset`, () => {
  it(`should return a skuHh456St2015EuWarehouse preset when built for rest`, () => {
    const skuHh456St2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2015EuWarehouse()
      .build();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015EuWarehouse preset when built for graphql`, () => {
    const skuHh456St2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHh456St2015EuWarehouse()
      .build();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
