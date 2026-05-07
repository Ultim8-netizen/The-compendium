export interface CaseFileMeta {
  slug: string
  title: string
  subtitle: string
  classificationCode: string
  department: string
  threatLevel: 'LOW' | 'MODERATE' | 'CRITICAL' | 'TERMINAL'
  tags: string[]
  excerpt: string
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
    excerpt: 'He trapped me at the printer. I went in for paper. I came out with a complete understanding of his brother-in-law\'s 2019 knee surgery.',
  },
  {
    slug: 'gcds',
    title: 'Disease Classification Bulletin No. 41',
    subtitle: 'Geriatric Comedic Delusion Syndrome',
    classificationCode: 'NICP-41-GCDS',
    department: 'Dept. of Intergenerational Humor Trauma',
    threatLevel: 'TERMINAL',
    tags: ['clinical', 'dad jokes', 'facility placement'],
    excerpt: 'The laughing is neurologically mandatory. The audience\'s response is neurologically irrelevant.',
  },
  {
    slug: 'boring-class-survival-guide',
    title: 'The Boring Class Survival Manual',
    subtitle: 'Surviving an Excruciatingly Boring Class',
    classificationCode: 'DAE-3RD-ED',
    department: 'Dept. of Academic Endurance',
    threatLevel: 'CRITICAL',
    tags: ['academic survival', 'field manual', 'mental escape'],
    excerpt: 'You are not here to learn. You are here to endure. The notebook is a prop. Both of these things are lies, but comfortable ones.',
  },
  {
    slug: 'cndd',
    title: 'Curriculum Compliance Audit No. 41',
    subtitle: 'Chronic Narrative Divergence Disorder in Active Teaching Personnel',
    classificationCode: 'OCINC/UBD-2026/0041',
    department: 'Office of Curricular Integrity & Narrative Containment',
    threatLevel: 'TERMINAL',
    tags: ['clinical', 'academic', 'biographical containment'],
    excerpt: 'The subject operates as an oral historian with institutional access to a captive audience. Students arrive expecting instruction. They leave knowing the name of the dog.',
  },
]