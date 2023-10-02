
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMTB023 from './sku-MTB023';

describe('With skuMTB023 preset', () => {
    it('should return skuMTB023 preset', () => {
        const skuMTB023Preset = skuMTB023().build<TInventoryEntryDraft>();
        expect(skuMTB023Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMTB023 preset when built for GraphQL', () => {
        const skuMTB023PresetGraphql = skuMTB023().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMTB023PresetGraphql).toMatchInlineSnapshot(``);
    });
});


