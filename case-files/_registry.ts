// _registry.ts

export interface CaseFileMeta {
  slug: string
  title: string
  subtitle: string
  classificationCode: string
  department: string
  threatLevel: 'LOW' | 'MODERATE' | 'CRITICAL' | 'TERMINAL'
  tags: string[]
}

export const CASE_FILES: CaseFileMeta[] = [
  {
    slug: 'endless-talker',
    title: 'OPERATION: DEAD AIR',
    subtitle: 'Surviving the Infinite Talker',
    classificationCode: 'NSA-7742-ORAL',
    department: 'Dept. of Conversational Threat Assessment',
    threatLevel: 'CRITICAL',
    tags: ['social survival', 'field manual', 'extraction protocols'],
  },
  {
    slug: 'gcds',
    title: 'Disease Classification Bulletin No. 41',
    subtitle: 'Geriatric Comedic Delusion Syndrome',
    classificationCode: 'NICP-41-GCDS',
    department: 'Dept. of Intergenerational Humor Trauma',
    threatLevel: 'TERMINAL',
    tags: ['clinical', 'dad jokes', 'facility placement'],
  },
  {
    slug: 'boring-class-survival-guide',
    title: 'The Boring Class Survival Manual',
    subtitle: 'Surviving an Excruciatingly Boring Class',
    classificationCode: 'DAE-3RD-ED',
    department: 'Dept. of Academic Endurance',
    threatLevel: 'CRITICAL',
    tags: ['academic survival', 'field manual', 'mental escape'],
  },
]