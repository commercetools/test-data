import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWtp09 preset`, () => {
  it(`should return a skuWtp09 preset when built for rest`, () => {
    const skuWtp09Preset = InventoryEntryDraftRest.presets.skuWtp09().build();
    expect(skuWtp09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWtp09 preset when built for graphql`, () => {
    const skuWtp09Preset = InventoryEntryDraftGraphql.presets
      .skuWtp09()
      .build();
    expect(skuWtp09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWtp09 preset when built for legacy rest`, () => {
    const skuWtp09Preset = InventoryEntryDraft.presets
      .skuWtp09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWtp09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWtp09 preset when built for legacy graphql`, () => {
    const skuWtp09Preset = InventoryEntryDraft.presets
      .skuWtp09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWtp09Preset).toMatchInlineSnapshot();
  });
});
