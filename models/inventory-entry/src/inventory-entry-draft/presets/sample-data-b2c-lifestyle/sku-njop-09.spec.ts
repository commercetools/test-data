import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNjop09 preset`, () => {
  it(`should return a skuNjop09 preset when built for rest`, () => {
    const skuNjop09Preset = InventoryEntryDraftRest.presets.skuNjop09().build();
    expect(skuNjop09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNjop09 preset when built for graphql`, () => {
    const skuNjop09Preset = InventoryEntryDraftGraphql.presets
      .skuNjop09()
      .build();
    expect(skuNjop09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNjop09 preset when built for legacy rest`, () => {
    const skuNjop09Preset = InventoryEntryDraft.presets
      .skuNjop09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNjop09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNjop09 preset when built for legacy graphql`, () => {
    const skuNjop09Preset = InventoryEntryDraft.presets
      .skuNjop09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNjop09Preset).toMatchInlineSnapshot();
  });
});
