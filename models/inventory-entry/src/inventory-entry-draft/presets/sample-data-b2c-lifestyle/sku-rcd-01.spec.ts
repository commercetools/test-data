import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRcd01 preset`, () => {
  it(`should return a skuRcd01 preset when built for rest`, () => {
    const skuRcd01Preset = InventoryEntryDraftRest.presets.skuRcd01().build();
    expect(skuRcd01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcd01 preset when built for graphql`, () => {
    const skuRcd01Preset = InventoryEntryDraftGraphql.presets
      .skuRcd01()
      .build();
    expect(skuRcd01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcd01 preset when built for legacy rest`, () => {
    const skuRcd01Preset = InventoryEntryDraft.presets
      .skuRcd01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRcd01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcd01 preset when built for legacy graphql`, () => {
    const skuRcd01Preset = InventoryEntryDraft.presets
      .skuRcd01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRcd01Preset).toMatchInlineSnapshot();
  });
});
