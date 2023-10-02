
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuLPC011 from './sku-LPC011';

describe('With skuLPC011 preset', () => {
    it('should return skuLPC011 preset', () => {
        const skuLPC011Preset = skuLPC011().build<TInventoryEntryDraft>();
        expect(skuLPC011Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuLPC011 preset when built for GraphQL', () => {
        const skuLPC011PresetGraphql = skuLPC011().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuLPC011PresetGraphql).toMatchInlineSnapshot(``);
    });
});


