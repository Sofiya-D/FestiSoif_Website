export const PointType = {
  WATER: "point d'eau",
  TOILET: "toilette",
  FOOD: "restauration",
  TRASH: "poubelle",
};

export const points = [
  {
    id: 1,
    position: [48.39506385569359, -4.482910037040711],
    radius: 1000,
    name: "Point d'eau zone A",
    desc: "Fontaine potable accessible",
    type: PointType.WATER,
    occupation: "Faible"
  },
  {
    id: 2,
    position: [48.38926115172177, -4.477915763854981],
    radius: 1000,
    name: "Toilettes zone B",
    desc: "Toilettes publiques propres",
    type: PointType.TOILET,
    occupation: "Élevée"
  },
  {
    id: 3,
    position: [48.3882636896719, -4.484224319458009],
    radius: 1000,
    name: "Restauration zone C",
    desc: "Snack et boissons",
    type: PointType.FOOD,
    occupation: "Faible"
  },
  {
    id: 4,
    position: [48.39176896993031, -4.4816064834594735],
    radius: 1000,
    name: "Poubelle zone D",
    desc: "Déchets recyclables",
    type: PointType.TRASH,
    occupation: "Élevée"
  },
  {
    id: 5,
    position: [48.39359276009081, -4.494524002075196],
    radius: 1000,
    name: "Point d'eau zone E",
    desc: "Fontaine pour se rafraîchir",
    type: PointType.WATER,
    occupation: "Moyenne"
  },
  {
    id: 6,
    position: [48.387038209531745, -4.489974975585938],
    radius: 1000,
    name: "Toilettes zone F",
    desc: "Sanitaires publics",
    type: PointType.TOILET,
    occupation: "Moyenne"
  },
  {
    id: 7,
    position: [48.39155524024171, -4.4777119159698495],
    radius: 1000,
    name: "Restauration zone G",
    desc: "Petits snacks et boissons",
    type: PointType.FOOD,
    occupation: "Élevée"
  },
  {
    id: 8,
    position: [48.39164073222487, -4.487780928611756],
    radius: 1000,
    name: "Poubelle zone H",
    desc: "Pour les déchets ménagers",
    type: PointType.TRASH,
    occupation: "Faible"
  },
];

export const maps = [
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
  "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
]