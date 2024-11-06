import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRwg09 preset`, () => {
  it(`should return a skuRwg09 preset when built for rest`, () => {
    const skuRwg09Preset = InventoryEntryDraftRest.presets.skuRwg09().build();
    expect(skuRwg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRwg09 preset when built for graphql`, () => {
    const skuRwg09Preset = InventoryEntryDraftGraphql.presets
      .skuRwg09()
      .build();
    expect(skuRwg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRwg09 preset when built for legacy rest`, () => {
    const skuRwg09Preset = InventoryEntryDraft.presets
      .skuRwg09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRwg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRwg09 preset when built for legacy graphql`, () => {
    const skuRwg09Preset = InventoryEntryDraft.presets
      .skuRwg09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRwg09Preset).toMatchInlineSnapshot();
  });
});
