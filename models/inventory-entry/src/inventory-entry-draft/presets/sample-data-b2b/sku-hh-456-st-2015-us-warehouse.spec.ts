import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2015UsWarehouse preset`, () => {
  it(`should return a skuHh456St2015UsWarehouse preset when built for rest`, () => {
    const skuHh456St2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2015UsWarehouse()
      .build();
    expect(skuHh456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015UsWarehouse preset when built for graphql`, () => {
    const skuHh456St2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHh456St2015UsWarehouse()
      .build();
    expect(skuHh456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015UsWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
