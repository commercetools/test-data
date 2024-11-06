import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuStra095 preset`, () => {
  it(`should return a skuStra095 preset when built for rest`, () => {
    const skuStra095Preset = InventoryEntryDraftRest.presets
      .skuStra095()
      .build();
    expect(skuStra095Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuStra095 preset when built for graphql`, () => {
    const skuStra095Preset = InventoryEntryDraftGraphql.presets
      .skuStra095()
      .build();
    expect(skuStra095Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuStra095 preset when built for legacy rest`, () => {
    const skuStra095Preset = InventoryEntryDraft.presets
      .skuStra095()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStra095Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuStra095 preset when built for legacy graphql`, () => {
    const skuStra095Preset = InventoryEntryDraft.presets
      .skuStra095()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStra095Preset).toMatchInlineSnapshot();
  });
});
