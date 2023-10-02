
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuEWC07 from './sku-EWC07';

describe('With skuEWC07 preset', () => {
    it('should return skuEWC07 preset', () => {
        const skuEWC07Preset = skuEWC07().build<TInventoryEntryDraft>();
        expect(skuEWC07Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuEWC07 preset when built for GraphQL', () => {
        const skuEWC07PresetGraphql = skuEWC07().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuEWC07PresetGraphql).toMatchInlineSnapshot(``);
    });
});


