import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2019UsWarehouse preset`, () => {
  it(`should return a skuM890Op2019UsWarehouse preset when built for rest`, () => {
    const skuM890Op2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2019UsWarehouse()
      .build();
    expect(skuM890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019UsWarehouse preset when built for graphql`, () => {
    const skuM890Op2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuM890Op2019UsWarehouse()
      .build();
    expect(skuM890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019UsWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
