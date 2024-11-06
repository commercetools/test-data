import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2019EuWarehouse preset`, () => {
  it(`should return a skuHh456St2019EuWarehouse preset when built for rest`, () => {
    const skuHh456St2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2019EuWarehouse()
      .build();
    expect(skuHh456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2019EuWarehouse preset when built for graphql`, () => {
    const skuHh456St2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHh456St2019EuWarehouse()
      .build();
    expect(skuHh456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2019EuWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
