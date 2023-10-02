
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSCM02 from './sku-SCM02';

describe('With skuSCM02 preset', () => {
    it('should return skuSCM02 preset', () => {
        const skuSCM02Preset = skuSCM02().build<TInventoryEntryDraft>();
        expect(skuSCM02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSCM02 preset when built for GraphQL', () => {
        const skuSCM02PresetGraphql = skuSCM02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSCM02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


