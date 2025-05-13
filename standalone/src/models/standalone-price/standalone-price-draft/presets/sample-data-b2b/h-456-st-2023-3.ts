import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const h456St20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('h456-st-2023-3')
    .sku('h456-st-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(1848000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default h456St20233;
