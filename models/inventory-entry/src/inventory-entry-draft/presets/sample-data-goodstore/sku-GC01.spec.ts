
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuGC01 from './sku-GC01';

describe('With skuGC01 preset', () => {
    it('should return skuGC01 preset', () => {
        const skuGC01Preset = skuGC01().build<TInventoryEntryDraft>();
        expect(skuGC01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuGC01 preset when built for GraphQL', () => {
        const skuGC01PresetGraphql = skuGC01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuGC01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


