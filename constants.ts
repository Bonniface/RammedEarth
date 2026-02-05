import { Project, ProcessStep, NavItem, SustainabilityCard } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Process', href: '#process' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Red Rock Sanctuary',
    location: 'Sedona, Arizona',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeVlkOU8UqjsNbUKghWrfYWZMYaF-QYkGOZAXacvGT4pBwiRxUVxPgYCRyoc0RbpqGN0E_Y9jwHdaonrcU0zCOGl4loCJgdUa1uZ0MIGwkMuvG0dVH-G69yRifnbjFutjW7cipIQ_Vpii7l4xwPaFENEPCLFFoDaAKcrqsAU5yF27JxJZtIcuGcGD68qDqpyxHD0QtHbM5ZIY-0RDZ1ROfyIxIJ-YtTCiW4povaNp9wvrCv_00r3vndUXZnbkmtl7cOBX8NcvU9lLL',
    size: 'large'
  },
  {
    id: 2,
    title: 'Coastal Pavilion',
    location: 'Byron Bay, Australia',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaflVLYBs7kCQeKdsolC7Z_4gq8K6dbIvYAxQ3Jy0hPINdMEhyDQIx70X0UgTVGeL4kNHoGMRpvVlQ1pTXrbUcEWM8zmtP0Tyxhgz8EktW15lQtKCIzuA6ttHT1bjnwqZUQ_wsuIj_R-O3mLyRXlRHTh1M_yHWb91Bi0YvyXY5qzG7Bn9r8ETj7ehWFkIWKrfl0921VziQcsc3FeCA5I_UaSyWr3arGRIWF9d6DK6qGxx4wr2XgcCwbtiO-LrvCKrBXvOCQgMP5JFh'
  },
  {
    id: 3,
    title: 'Desert Retreat',
    location: 'Joshua Tree, California',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvoCUT7k_O7waG_xNQQd8DWnD2Yaw_Dq2AGonfYIrAD5Y6EkM6YD7f_33FM24muFI0NtqPYoR_HE4F61EYil67xwICbmA-yTlm2qpGhw9yfr2gt77LBM1bAcIxAS-atpLLUOeyizN9qhXiUBpgTP5znNSAru-Q5GdGQ12r6bEKmDUy92RKfpUMEfYxqc8vjvHbHovru9NxpNtQtZf1tJTf-Wns5IpnkrlNRTrGo-4HvhZZNnSrblw4_kBSnueit2aMn2lwTqZakul3'
  },
  {
    id: 4,
    title: 'Vineyard Estate',
    location: 'Algarve, Portugal',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEawdIA1xWyZcS9a56ODeIQLpm6ZQXUBPnH-C6h29i-tEObeJ6SbDK_Fsj99fwR69oO6ez5wKhC5MpShYQ8dhR5mFjk5MZZWM4uvwL_CwQGf58YjJVgRcM-lesrdje7e4b_NpkrXXP0UhqqsssK-lfOFODxUgcV26izuEaH0qAwvdfiDTAPJsyM58rIzIp8H3KnEcsME9odjnYG4hubB6zWildA4ZqN8DAbMnHKlottY145daJuzOy58HgV7nry7qrCvlJc9lLP1uN',
    size: 'large'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Selection & Mixing',
    description: 'We source local aggregates to ensure the structure belongs to its environment. The precise blend determines color and strength.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP9QSUy9vALGZ45Gxt1kwXVbIKdY_TWKOZrN8axMyNPUEv6HFlux-F0djebt-d0cYv1hCopOboOA89ouOXId3GJalSIV3jeUHLXZb4DHKy3ZUIO75wkShbNEDSJ4dvPkZty0N4l1iNNxCUhQ3qer9xPAEb7NkvybwCIEy181V81lmICjXp9LQ4X9pBfWepf1NEWo1dglJI8EorCJ10wcVcwAym5y2i2p5UfvsAXyX668ua5AxMo2v_idZvkXnhz3Hr6n7S3E5XK9XY'
  },
  {
    id: 2,
    title: 'Compression',
    description: 'Layers of earth are poured into formwork and rammed pneumatically to 50% of their original volume, creating stone-like density.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPGxCrNK_WovIw_cctJRCcWp6UJ2nVIdOLBD2eL-W3u7HzU7t-c6Ae_tvMTTjhYRc8hArDOV6SaTBZLo6Ux56Tojlp6gpm4OEp3xyqG3bSg-B0WShswR_34POdauIa7C3P4WDMyfabHz2V_4_UHCxThN3c5NneqoHMzCDiSaSZjSZ5ppzZDip0mTSutTUI7pRb-RoytibVdHLZ_hxJU1MObtIluhwXgtIdQ_ec1Zvr2P3obHce97fnzZObRQFvU_G17tOWaVIbMRR2'
  },
  {
    id: 3,
    title: 'Curing & Revealing',
    description: 'Forms are removed immediately to reveal the raw, stratified texture. The walls cure over time, sequestering carbon as they harden.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD28ShuKV7ZXx-LYSYMBWbFdM4YazaUI0NpoKiNrtEcoIDhMcSEZzzqK24764ZeQxu7opO2SJ_rVfCZLUAess32SDt6GCXTv3SQG79PTBEMK4PN2vTKgzIyuoMIR9aOxMJMyD-uuXvS6HWSKdW2_hPZEywlDWpWlOK3wENoW4de8jH6FjW1HWxZ8D7I-QG2o2c-xpSicXR8FlbOMOYywd3DjVZliUDfeMUrWz1IHDuq2OVbtDL0j7dAL3l0lvELGrh0OpAfvIAs42FD'
  }
];

export const SUSTAINABILITY_CARDS: SustainabilityCard[] = [
    {
        icon: 'thermostat',
        title: 'Thermal Mass',
        description: 'Thick earthen walls absorb heat during the day and release it at night, naturally regulating indoor temperatures and reducing HVAC reliance.'
    },
    {
        icon: 'eco',
        title: 'Low Carbon Footprint',
        description: 'Utilizing on-site subsoil minimizes transport emissions. Unlike cement, raw earth requires minimal processing energy.'
    },
    {
        icon: 'foundation',
        title: 'Fire & Pest Resistant',
        description: 'Inorganic by nature, rammed earth is non-combustible and provides no food source for termites or pests, ensuring longevity.'
    }
];