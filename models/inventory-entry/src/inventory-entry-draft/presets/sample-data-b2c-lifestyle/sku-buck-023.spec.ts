import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBuck023 preset`, () => {
  it(`should return a skuBuck023 preset when built for rest`, () => {
    const skuBuck023Preset = InventoryEntryDraftRest.presets
      .skuBuck023()
      .build();
    expect(skuBuck023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBuck023 preset when built for graphql`, () => {
    const skuBuck023Preset = InventoryEntryDraftGraphql.presets
      .skuBuck023()
      .build();
    expect(skuBuck023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBuck023 preset when built for legacy rest`, () => {
    const skuBuck023Preset = InventoryEntryDraft.presets
      .skuBuck023()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBuck023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBuck023 preset when built for legacy graphql`, () => {
    const skuBuck023Preset = InventoryEntryDraft.presets
      .skuBuck023()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBuck023Preset).toMatchInlineSnapshot();
  });
});
