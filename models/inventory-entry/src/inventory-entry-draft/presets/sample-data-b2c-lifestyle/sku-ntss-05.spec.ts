import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNtss05 preset`, () => {
  it(`should return a skuNtss05 preset when built for rest`, () => {
    const skuNtss05Preset = InventoryEntryDraftRest.presets.skuNtss05().build();
    expect(skuNtss05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss05 preset when built for graphql`, () => {
    const skuNtss05Preset = InventoryEntryDraftGraphql.presets
      .skuNtss05()
      .build();
    expect(skuNtss05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss05 preset when built for legacy rest`, () => {
    const skuNtss05Preset = InventoryEntryDraft.presets
      .skuNtss05()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuNtss05 preset when built for legacy graphql`, () => {
    const skuNtss05Preset = InventoryEntryDraft.presets
      .skuNtss05()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss05Preset).toMatchInlineSnapshot();
  });
});
