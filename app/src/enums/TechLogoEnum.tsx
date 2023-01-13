import bootstrap from 'src/assets/logos/bootstrap.svg'
import c from 'src/assets/logos/c.svg'
import css3 from 'src/assets/logos/css3.svg'
import docker from 'src/assets/logos/docker.svg'
import flutterio from 'src/assets/logos/flutterio.svg'
import git from 'src/assets/logos/git.svg'
import html5 from 'src/assets/logos/html5.svg'
import mysql from 'src/assets/logos/mysql.svg'
import nginx from 'src/assets/logos/nginx.svg'
import nodejs from 'src/assets/logos/nodejs.svg'
import php from 'src/assets/logos/php.svg'
import python from 'src/assets/logos/python.svg'
import react from 'src/assets/logos/react.svg'
import webpack from 'src/assets/logos/webpack.svg'

export interface TechLogoInterface {
  bootstrap: string[]
  c: string[]
  css3: string[]
  docker: string[]
  flutterio: string[]
  git: string[]
  html5: string[]
  mysql: string[]
  nginx: string[]
  nodejs: string[]
  php: string[]
  python: string[]
  react: string[]
  webpack: string[]
}
const TechLogoEnum: TechLogoInterface = {
  bootstrap: [bootstrap, ''],
  c: [c, ''],
  css3: [css3, ''],
  docker: [docker, ''],
  flutterio: [flutterio, ''],
  git: [git, ''],
  html5: [html5, ''],
  mysql: [mysql, ''],
  nginx: [nginx, ''],
  nodejs: [nodejs, ''],
  php: [php, ''],
  python: [python, ''],
  react: [react, ''],
  webpack: [webpack, '']
}

export default TechLogoEnum
