import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuH456St2015UsWarehouse preset`, () => {
  it(`should return a skuH456St2015UsWarehouse preset when built for rest`, () => {
    const skuH456St2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuH456St2015UsWarehouse()
      .build();
    expect(skuH456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015UsWarehouse preset when built for graphql`, () => {
    const skuH456St2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuH456St2015UsWarehouse()
      .build();
    expect(skuH456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015UsWarehouse preset when built for legacy rest`, () => {
    const skuH456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuH456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuH456St2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuH456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuH456St2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuH456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
