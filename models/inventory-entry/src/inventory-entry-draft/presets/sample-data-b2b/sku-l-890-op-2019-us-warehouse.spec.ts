import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuL890Op2019UsWarehouse preset`, () => {
  it(`should return a skuL890Op2019UsWarehouse preset when built for rest`, () => {
    const skuL890Op2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuL890Op2019UsWarehouse()
      .build();
    expect(skuL890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2019UsWarehouse preset when built for graphql`, () => {
    const skuL890Op2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuL890Op2019UsWarehouse()
      .build();
    expect(skuL890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2019UsWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
