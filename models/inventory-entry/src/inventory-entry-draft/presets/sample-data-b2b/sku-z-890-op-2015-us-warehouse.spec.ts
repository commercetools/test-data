import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2015UsWarehouse preset`, () => {
  it(`should return a skuZ890Op2015UsWarehouse preset when built for rest`, () => {
    const skuZ890Op2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2015UsWarehouse()
      .build();
    expect(skuZ890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuZ890Op2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZ890Op2015UsWarehouse()
      .build();
    expect(skuZ890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
