import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCqb09 preset`, () => {
  it(`should return a skuCqb09 preset when built for rest`, () => {
    const skuCqb09Preset = InventoryEntryDraftRest.presets.skuCqb09().build();
    expect(skuCqb09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCqb09 preset when built for graphql`, () => {
    const skuCqb09Preset = InventoryEntryDraftGraphql.presets
      .skuCqb09()
      .build();
    expect(skuCqb09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCqb09 preset when built for legacy rest`, () => {
    const skuCqb09Preset = InventoryEntryDraft.presets
      .skuCqb09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCqb09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCqb09 preset when built for legacy graphql`, () => {
    const skuCqb09Preset = InventoryEntryDraft.presets
      .skuCqb09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCqb09Preset).toMatchInlineSnapshot();
  });
});
