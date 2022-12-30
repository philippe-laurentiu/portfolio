import logo_react from 'src/assets/logos/logo_react.png'
import logo_drupal from 'src/assets/logos/logo_drupal.png'
import logo_formio from 'src/assets/logos/logo_formio.png'
import logo_go from 'src/assets/logos/logo_go.png'
import logo_js from 'src/assets/logos/logo_js.png'
import logo_mysql from 'src/assets/logos/logo_mysql.png'
import logo_php from 'src/assets/logos/logo_php.png'
import logo_python from 'src/assets/logos/logo_python.png'
import logo_symfony from 'src/assets/logos/logo_symfony.png'

export interface TechLogoInterface {
  react: string
  drupal: string
  formio: string
  go: string
  js: string
  mysql: string
  php: string
  python: string
  symfony: string
}
const TechLogoEnum: TechLogoInterface = {
  react: logo_react,
  drupal: logo_drupal,
  formio: logo_formio,
  go: logo_go,
  js: logo_js,
  mysql: logo_mysql,
  php: logo_php,
  python: logo_python,
  symfony: logo_symfony
}

export default TechLogoEnum
