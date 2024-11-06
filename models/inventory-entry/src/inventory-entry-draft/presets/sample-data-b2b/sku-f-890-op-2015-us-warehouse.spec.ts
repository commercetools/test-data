import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuF890Op2015UsWarehouse preset`, () => {
  it(`should return a skuF890Op2015UsWarehouse preset when built for rest`, () => {
    const skuF890Op2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuF890Op2015UsWarehouse()
      .build();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuF890Op2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuF890Op2015UsWarehouse()
      .build();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
