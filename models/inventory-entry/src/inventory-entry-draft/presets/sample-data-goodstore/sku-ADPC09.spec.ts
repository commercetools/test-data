
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuADPC09 from './sku-ADPC09';

describe('With skuADPC09 preset', () => {
    it('should return skuADPC09 preset', () => {
        const skuADPC09Preset = skuADPC09().build<TInventoryEntryDraft>();
        expect(skuADPC09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuADPC09 preset when built for GraphQL', () => {
        const skuADPC09PresetGraphql = skuADPC09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuADPC09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


