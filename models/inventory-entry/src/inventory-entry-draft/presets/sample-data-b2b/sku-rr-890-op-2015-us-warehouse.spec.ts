import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRr890Op2015UsWarehouse preset`, () => {
  it(`should return a skuRr890Op2015UsWarehouse preset when built for rest`, () => {
    const skuRr890Op2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuRr890Op2015UsWarehouse()
      .build();
    expect(skuRr890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuRr890Op2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuRr890Op2015UsWarehouse()
      .build();
    expect(skuRr890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuRr890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuRr890Op2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
