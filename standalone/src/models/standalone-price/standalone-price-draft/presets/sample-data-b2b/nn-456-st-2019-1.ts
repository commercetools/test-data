import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const nn456St20191 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('nn456-st-2019-1')
    .sku('nn456-st-2019')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2662000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default nn456St20191;
