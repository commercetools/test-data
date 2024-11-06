import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJar08 preset`, () => {
  it(`should return a skuJar08 preset when built for rest`, () => {
    const skuJar08Preset = InventoryEntryDraftRest.presets.skuJar08().build();
    expect(skuJar08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuJar08 preset when built for graphql`, () => {
    const skuJar08Preset = InventoryEntryDraftGraphql.presets
      .skuJar08()
      .build();
    expect(skuJar08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuJar08 preset when built for legacy rest`, () => {
    const skuJar08Preset = InventoryEntryDraft.presets
      .skuJar08()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJar08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuJar08 preset when built for legacy graphql`, () => {
    const skuJar08Preset = InventoryEntryDraft.presets
      .skuJar08()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJar08Preset).toMatchInlineSnapshot();
  });
});
