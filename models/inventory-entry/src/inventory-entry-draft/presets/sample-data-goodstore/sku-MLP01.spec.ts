
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMLP01 from './sku-MLP01';

describe('With skuMLP01 preset', () => {
    it('should return skuMLP01 preset', () => {
        const skuMLP01Preset = skuMLP01().build<TInventoryEntryDraft>();
        expect(skuMLP01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMLP01 preset when built for GraphQL', () => {
        const skuMLP01PresetGraphql = skuMLP01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMLP01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


