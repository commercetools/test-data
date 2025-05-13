import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const v456St20192 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('v456-st-2019-2')
    .sku('v456-st-2019')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2750000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default v456St20192;
