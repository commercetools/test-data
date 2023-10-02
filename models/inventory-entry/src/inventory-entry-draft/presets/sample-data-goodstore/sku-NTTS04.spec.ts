
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuNTTS04 from './sku-NTTS04';

describe('With skuNTTS04 preset', () => {
    it('should return skuNTTS04 preset', () => {
        const skuNTTS04Preset = skuNTTS04().build<TInventoryEntryDraft>();
        expect(skuNTTS04Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuNTTS04 preset when built for GraphQL', () => {
        const skuNTTS04PresetGraphql = skuNTTS04().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuNTTS04PresetGraphql).toMatchInlineSnapshot(``);
    });
});


