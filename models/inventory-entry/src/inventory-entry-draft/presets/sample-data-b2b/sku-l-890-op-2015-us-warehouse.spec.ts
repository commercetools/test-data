import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuL890Op2015UsWarehouse preset`, () => {
  it(`should return a skuL890Op2015UsWarehouse preset when built for rest`, () => {
    const skuL890Op2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuL890Op2015UsWarehouse()
      .build();
    expect(skuL890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuL890Op2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuL890Op2015UsWarehouse()
      .build();
    expect(skuL890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
