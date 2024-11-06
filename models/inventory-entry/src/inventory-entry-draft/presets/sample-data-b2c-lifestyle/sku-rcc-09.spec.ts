import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRcc09 preset`, () => {
  it(`should return a skuRcc09 preset when built for rest`, () => {
    const skuRcc09Preset = InventoryEntryDraftRest.presets.skuRcc09().build();
    expect(skuRcc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcc09 preset when built for graphql`, () => {
    const skuRcc09Preset = InventoryEntryDraftGraphql.presets
      .skuRcc09()
      .build();
    expect(skuRcc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcc09 preset when built for legacy rest`, () => {
    const skuRcc09Preset = InventoryEntryDraft.presets
      .skuRcc09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRcc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcc09 preset when built for legacy graphql`, () => {
    const skuRcc09Preset = InventoryEntryDraft.presets
      .skuRcc09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRcc09Preset).toMatchInlineSnapshot();
  });
});
