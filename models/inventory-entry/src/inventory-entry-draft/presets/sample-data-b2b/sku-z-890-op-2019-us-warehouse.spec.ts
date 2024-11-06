import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2019UsWarehouse preset`, () => {
  it(`should return a skuZ890Op2019UsWarehouse preset when built for rest`, () => {
    const skuZ890Op2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2019UsWarehouse()
      .build();
    expect(skuZ890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019UsWarehouse preset when built for graphql`, () => {
    const skuZ890Op2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZ890Op2019UsWarehouse()
      .build();
    expect(skuZ890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019UsWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
