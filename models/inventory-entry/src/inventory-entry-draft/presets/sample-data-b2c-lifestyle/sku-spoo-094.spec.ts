import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSpoo094 preset`, () => {
  it(`should return a skuSpoo094 preset when built for rest`, () => {
    const skuSpoo094Preset = InventoryEntryDraftRest.presets
      .skuSpoo094()
      .build();
    expect(skuSpoo094Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpoo094 preset when built for graphql`, () => {
    const skuSpoo094Preset = InventoryEntryDraftGraphql.presets
      .skuSpoo094()
      .build();
    expect(skuSpoo094Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpoo094 preset when built for legacy rest`, () => {
    const skuSpoo094Preset = InventoryEntryDraft.presets
      .skuSpoo094()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSpoo094Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpoo094 preset when built for legacy graphql`, () => {
    const skuSpoo094Preset = InventoryEntryDraft.presets
      .skuSpoo094()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSpoo094Preset).toMatchInlineSnapshot();
  });
});
