import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2019UsWarehouse preset`, () => {
  it(`should return a skuD234Wx2019UsWarehouse preset when built for rest`, () => {
    const skuD234Wx2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2019UsWarehouse()
      .build();
    expect(skuD234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019UsWarehouse preset when built for graphql`, () => {
    const skuD234Wx2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuD234Wx2019UsWarehouse()
      .build();
    expect(skuD234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019UsWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
