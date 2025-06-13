import {
  LocalizedStringDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import type { TCategoryDraftBuilder, TCategoryDraft } from '../../../types';
import empty from '../empty';
import dumpTrucks from './dump-trucks';

const dumpTrucksCategory = dumpTrucks().build<TCategoryDraft>();

const articulatedDumpTrucks = (): TCategoryDraftBuilder =>
  empty()
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Gelenk-Kipper')
        ['it-IT']('Camion Ribaltabili Articolati')
        ['nl-NL']('Knikgestuurde Kipwagens')
        ['fr-FR']('Camions-bennes articulés')
        ['en-AU']('Articulated Dump Trucks')
        ['es-ES']('Camiones volquete articulados')
        ['en-GB']('Articulated Dump Trucks')
        ['en-NZ']('Articulated Dump Trucks')
        ['pt-PT']('Caminhões Basculantes Articulados')
        ['en-US']('Articulated Dump Trucks')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Kipper mit gelenkigen Verbindungen')
        ['it-IT']('Camion ribaltabili con giunti articolati')
        ['nl-NL']('Kipwagens met scharnierende verbindingen')
        ['fr-FR']('Camions-bennes avec des articulations articulées')
        ['en-AU']('Dump trucks with articulated joints')
        ['es-ES']('Camiones volquete con articulaciones')
        ['en-GB']('Dump trucks with articulated joints')
        ['en-NZ']('Dump trucks with articulated joints')
        ['pt-PT']('Caminhões basculantes com juntas articuladas')
        ['en-US']('Dump trucks with articulated joints')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('gelenk_kipper')
        ['it-IT']('articulated_dump_trucks')
        ['nl-NL']('articulated_dump_trucks')
        ['fr-FR']('camions_bennes_articules')
        ['en-AU']('articulated_dump_trucks')
        ['es-ES']('camiones_volquete_articulados')
        ['en-GB']('articulated_dump_trucks')
        ['en-NZ']('articulated_dump_trucks')
        ['pt-PT']('articulated_dump_trucks')
        ['en-US']('articulated_dump_trucks')
    )
    .key('articulated-dump-trucks')
    .orderHint('0.000017113644847751602265225')
    .parent(KeyReferenceDraft.presets.category().key(dumpTrucksCategory.key!));

export default articulatedDumpTrucks;
