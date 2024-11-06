import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuB456St2015UsWarehouse preset`, () => {
  it(`should return a skuB456St2015UsWarehouse preset when built for rest`, () => {
    const skuB456St2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuB456St2015UsWarehouse()
      .build();
    expect(skuB456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015UsWarehouse preset when built for graphql`, () => {
    const skuB456St2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuB456St2015UsWarehouse()
      .build();
    expect(skuB456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015UsWarehouse preset when built for legacy rest`, () => {
    const skuB456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuB456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuB456St2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuB456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuB456St2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuB456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
