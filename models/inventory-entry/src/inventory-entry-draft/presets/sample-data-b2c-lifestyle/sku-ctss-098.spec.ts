import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCtss098 preset`, () => {
  it(`should return a skuCtss098 preset when built for rest`, () => {
    const skuCtss098Preset = InventoryEntryDraftRest.presets
      .skuCtss098()
      .build();
    expect(skuCtss098Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCtss098 preset when built for graphql`, () => {
    const skuCtss098Preset = InventoryEntryDraftGraphql.presets
      .skuCtss098()
      .build();
    expect(skuCtss098Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCtss098 preset when built for legacy rest`, () => {
    const skuCtss098Preset = InventoryEntryDraft.presets
      .skuCtss098()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCtss098Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCtss098 preset when built for legacy graphql`, () => {
    const skuCtss098Preset = InventoryEntryDraft.presets
      .skuCtss098()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCtss098Preset).toMatchInlineSnapshot();
  });
});
