import type { TProductDraft } from '../../../types';
import lanaPillowCover from './lana-pillow-cover';

describe(`with lanaPillowCover preset`, () => {
  it(`should return a lanaPillowCover preset`, () => {
    const lanaPillowCoverPreset = lanaPillowCover().build<TProductDraft>();
    expect(lanaPillowCoverPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bedding",
      "typeId": "category",
    },
    {
      "key": "home-decor",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Ein Mikrofaser-Kissenbezug ist eine Art Textilbezug für ein Kissen, der aus synthetischen Fasern wie Polyester oder Nylon hergestellt wird. Mikrofaser ist bekannt für ihre Weichheit, Haltbarkeit und einfache Pflege.  Der Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und kann in einer Vielzahl von Farben und Mustern erhältlich sein, um verschiedenen Einrichtungsstilen und Vorlieben gerecht zu werden.  Das Mikrofasergewebe fühlt sich glatt und seidig an, ist sanft zur Haut und bietet eine angenehme Schlafoberfläche. Es ist außerdem atmungsaktiv und feuchtigkeitstransportierend, was hilft, die Körpertemperatur zu regulieren und eine Überhitzung während der Nacht zu verhindern.  Der Kissenbezug wird oft wegen seiner praktischen und funktionalen Eigenschaften verwendet, wie z. B. seiner Pflegeleichtigkeit und Beständigkeit gegen Falten, Flecken und Ausbleichen. Es kann einfach in einer Maschine gewaschen und getrocknet werden, was es zu einer praktischen und pflegeleichten Option für vielbeschäftigte Haushalte macht.  Insgesamt ist ein Mikrofaser-Kissenbezug ein vielseitiges und praktisches Accessoire, das den Komfort und die Haltbarkeit eines Kissens verbessern kann. Es kann sowohl zum täglichen Schlafen als auch zu dekorativen Zwecken in einer Vielzahl von Umgebungen wie Schlaf-, Gästezimmern und Wohnzimmern verwendet werden.",
    "en": undefined,
    "en-GB": "A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.  The microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.  The pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.  Overall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.",
    "en-US": "A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.  The microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.  The pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.  Overall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.",
    "fr": undefined,
  },
  "key": "lana-pillow-cover",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": {
          "de-DE": "- Waschmaschinenfest
- Kissen nicht im Lieferumfang enthalten
- Verfügt über ein Reißverschlussgehäuse",
          "en-GB": "- Machine washable
- Pillow not included
- Has a zip enclosure",
          "en-US": "- Machine washable
- Pillow not included
- Has a zip enclosure",
        },
      },
      {
        "name": "color",
        "value": {
          "de-DE": "Hell grau:#D3D3D3",
          "en-GB": "Light Grey:#D3D3D3",
          "en-US": "Light Gray:#D3D3D3",
        },
      },
    ],
    "images": [
      {
        "dimensions": {
          "h": 3143,
          "w": 4350,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Lana_Pillow_Cover-1.1.jpeg",
      },
    ],
    "key": undefined,
    "prices": [
      {
        "channel": undefined,
        "country": "DE",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1099,
          "currencyCode": "EUR",
        },
      },
      {
        "channel": undefined,
        "country": "GB",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1099,
          "currencyCode": "GBP",
        },
      },
      {
        "channel": undefined,
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1099,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "LPC-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Lana Kissenbezug",
    "en": undefined,
    "en-GB": "Lana Pillow Cover",
    "en-US": "Lana Pillow Cover",
    "fr": undefined,
  },
  "priceMode": undefined,
  "productType": {
    "key": "furniture-and-decor",
    "typeId": "product-type",
  },
  "publish": true,
  "searchKeywords": undefined,
  "slug": {
    "de": undefined,
    "de-DE": "lana-kissenbezug",
    "en": undefined,
    "en-GB": "lana-pillow-cover",
    "en-US": "lana-pillow-cover",
    "fr": undefined,
  },
  "state": undefined,
  "taxCategory": {
    "key": "standard-tax",
    "typeId": "tax-category",
  },
  "variants": undefined,
}
`);
  });

  it(`should return a lanaPillowCover preset when built for graphql`, () => {
    const lanaPillowCoverPresetGraphql =
      lanaPillowCover().buildGraphql<TProductDraft>();
    expect(lanaPillowCoverPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bedding",
      "typeId": "category",
    },
    {
      "key": "home-decor",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "en-GB",
      "value": "A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.  The microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.  The pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.  Overall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.",
    },
    {
      "locale": "en-US",
      "value": "A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.  The microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.  The pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.  Overall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.",
    },
    {
      "locale": "de-DE",
      "value": "Ein Mikrofaser-Kissenbezug ist eine Art Textilbezug für ein Kissen, der aus synthetischen Fasern wie Polyester oder Nylon hergestellt wird. Mikrofaser ist bekannt für ihre Weichheit, Haltbarkeit und einfache Pflege.  Der Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und kann in einer Vielzahl von Farben und Mustern erhältlich sein, um verschiedenen Einrichtungsstilen und Vorlieben gerecht zu werden.  Das Mikrofasergewebe fühlt sich glatt und seidig an, ist sanft zur Haut und bietet eine angenehme Schlafoberfläche. Es ist außerdem atmungsaktiv und feuchtigkeitstransportierend, was hilft, die Körpertemperatur zu regulieren und eine Überhitzung während der Nacht zu verhindern.  Der Kissenbezug wird oft wegen seiner praktischen und funktionalen Eigenschaften verwendet, wie z. B. seiner Pflegeleichtigkeit und Beständigkeit gegen Falten, Flecken und Ausbleichen. Es kann einfach in einer Maschine gewaschen und getrocknet werden, was es zu einer praktischen und pflegeleichten Option für vielbeschäftigte Haushalte macht.  Insgesamt ist ein Mikrofaser-Kissenbezug ein vielseitiges und praktisches Accessoire, das den Komfort und die Haltbarkeit eines Kissens verbessern kann. Es kann sowohl zum täglichen Schlafen als auch zu dekorativen Zwecken in einer Vielzahl von Umgebungen wie Schlaf-, Gästezimmern und Wohnzimmern verwendet werden.",
    },
  ],
  "key": "lana-pillow-cover",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Machine washable\\n- Pillow not included\\n- Has a zip enclosure","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten\\n- Verfügt über ein Reißverschlussgehäuse","en-US":"- Machine washable\\n- Pillow not included\\n- Has a zip enclosure"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Light Grey:#D3D3D3","de-DE":"Hell grau:#D3D3D3","en-US":"Light Gray:#D3D3D3"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 3143,
          "width": 4350,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Lana_Pillow_Cover-1.1.jpeg",
      },
    ],
    "key": undefined,
    "prices": [
      {
        "channel": undefined,
        "country": "DE",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1099,
            "currencyCode": "EUR",
          },
        },
      },
      {
        "channel": undefined,
        "country": "GB",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1099,
            "currencyCode": "GBP",
          },
        },
      },
      {
        "channel": undefined,
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1099,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "LPC-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Lana Pillow Cover",
    },
    {
      "locale": "en-GB",
      "value": "Lana Pillow Cover",
    },
    {
      "locale": "de-DE",
      "value": "Lana Kissenbezug",
    },
  ],
  "priceMode": undefined,
  "productType": {
    "key": "furniture-and-decor",
    "typeId": "product-type",
  },
  "publish": true,
  "searchKeywords": undefined,
  "slug": [
    {
      "locale": "en-US",
      "value": "lana-pillow-cover",
    },
    {
      "locale": "en-GB",
      "value": "lana-pillow-cover",
    },
    {
      "locale": "de-DE",
      "value": "lana-kissenbezug",
    },
  ],
  "state": undefined,
  "taxCategory": {
    "key": "standard-tax",
    "typeId": "tax-category",
  },
  "variants": undefined,
}
`);
  });
});
