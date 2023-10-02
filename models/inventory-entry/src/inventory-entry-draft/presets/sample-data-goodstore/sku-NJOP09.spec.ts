
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuNJOP09 from './sku-NJOP09';

describe('With skuNJOP09 preset', () => {
    it('should return skuNJOP09 preset', () => {
        const skuNJOP09Preset = skuNJOP09().build<TInventoryEntryDraft>();
        expect(skuNJOP09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuNJOP09 preset when built for GraphQL', () => {
        const skuNJOP09PresetGraphql = skuNJOP09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuNJOP09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


