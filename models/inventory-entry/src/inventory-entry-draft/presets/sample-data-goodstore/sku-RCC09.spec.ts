
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuRCC09 from './sku-RCC09';

describe('With skuRCC09 preset', () => {
    it('should return skuRCC09 preset', () => {
        const skuRCC09Preset = skuRCC09().build<TInventoryEntryDraft>();
        expect(skuRCC09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuRCC09 preset when built for GraphQL', () => {
        const skuRCC09PresetGraphql = skuRCC09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuRCC09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


