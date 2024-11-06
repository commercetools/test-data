import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2015UsWarehouse preset`, () => {
  it(`should return a skuM890Op2015UsWarehouse preset when built for rest`, () => {
    const skuM890Op2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2015UsWarehouse()
      .build();
    expect(skuM890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuM890Op2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuM890Op2015UsWarehouse()
      .build();
    expect(skuM890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
