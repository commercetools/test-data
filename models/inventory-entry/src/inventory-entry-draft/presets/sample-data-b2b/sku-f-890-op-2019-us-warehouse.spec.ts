import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuF890Op2019UsWarehouse preset`, () => {
  it(`should return a skuF890Op2019UsWarehouse preset when built for rest`, () => {
    const skuF890Op2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuF890Op2019UsWarehouse()
      .build();
    expect(skuF890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2019UsWarehouse preset when built for graphql`, () => {
    const skuF890Op2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuF890Op2019UsWarehouse()
      .build();
    expect(skuF890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2019UsWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
