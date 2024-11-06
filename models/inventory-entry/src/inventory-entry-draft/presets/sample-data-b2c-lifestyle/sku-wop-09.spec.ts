import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWop09 preset`, () => {
  it(`should return a skuWop09 preset when built for rest`, () => {
    const skuWop09Preset = InventoryEntryDraftRest.presets.skuWop09().build();
    expect(skuWop09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWop09 preset when built for graphql`, () => {
    const skuWop09Preset = InventoryEntryDraftGraphql.presets
      .skuWop09()
      .build();
    expect(skuWop09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWop09 preset when built for legacy rest`, () => {
    const skuWop09Preset = InventoryEntryDraft.presets
      .skuWop09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWop09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWop09 preset when built for legacy graphql`, () => {
    const skuWop09Preset = InventoryEntryDraft.presets
      .skuWop09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWop09Preset).toMatchInlineSnapshot();
  });
});
