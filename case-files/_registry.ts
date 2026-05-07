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
  {
    slug: 'cndd',
    title: 'Curriculum Compliance Audit No. 41',
    subtitle: 'Chronic Narrative Divergence Disorder in Active Teaching Personnel',
    classificationCode: 'OCINC/UBD-2026/0041',
    department: 'Office of Curricular Integrity & Narrative Containment',
    threatLevel: 'TERMINAL',
    tags: ['clinical', 'academic', 'biographical containment'],
  },
  {
    slug: 'public-audio-advisory',
    title: 'Advisory Notice PCA-0047-AUD',
    subtitle: 'Public Disturbance: Unsolicited Audio Broadcast in a Shared Space',
    classificationCode: 'PCA-0047-AUD',
    department: 'Public Conduct Authority',
    threatLevel: 'MODERATE',
    tags: ['public conduct', 'audio hazard', 'headphone noncompliance'],
  },
  {
    slug: 'non-functional-instructor',
    title: 'Emergency Academic Field Card',
    subtitle: 'Issued to Students Enrolled Under a Non-Functional Instructor',
    classificationCode: 'EAF-CARD-NF1',
    department: 'Dept. of Academic Endurance',
    threatLevel: 'CRITICAL',
    tags: ['academic survival', 'field card', 'instructor noncompliance'],
  },
]