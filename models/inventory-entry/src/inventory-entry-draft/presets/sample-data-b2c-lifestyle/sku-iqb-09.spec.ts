import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIqb09 preset`, () => {
  it(`should return a skuIqb09 preset when built for rest`, () => {
    const skuIqb09Preset = InventoryEntryDraftRest.presets.skuIqb09().build();
    expect(skuIqb09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIqb09 preset when built for graphql`, () => {
    const skuIqb09Preset = InventoryEntryDraftGraphql.presets
      .skuIqb09()
      .build();
    expect(skuIqb09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIqb09 preset when built for legacy rest`, () => {
    const skuIqb09Preset = InventoryEntryDraft.presets
      .skuIqb09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIqb09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIqb09 preset when built for legacy graphql`, () => {
    const skuIqb09Preset = InventoryEntryDraft.presets
      .skuIqb09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIqb09Preset).toMatchInlineSnapshot();
  });
});
