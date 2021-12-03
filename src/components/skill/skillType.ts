export type SkillType = {
  icon: JSX.Element
  name: string
  domaine: string
  projet?: ProjetType
}

type ProjetType = {
  nom: string
  cadre: string
  description: string[]
  link?: string
  iconDepot?: JSX.Element
}

export type TabSkillType = {
  titreTab: string
  initOpen?: boolean
  type: string
  projectCol?: boolean
  listSkill: SkillType[]
}
