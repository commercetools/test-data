
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuWTP09 from './sku-WTP09';

describe('With skuWTP09 preset', () => {
    it('should return skuWTP09 preset', () => {
        const skuWTP09Preset = skuWTP09().build<TInventoryEntryDraft>();
        expect(skuWTP09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuWTP09 preset when built for GraphQL', () => {
        const skuWTP09PresetGraphql = skuWTP09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuWTP09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


