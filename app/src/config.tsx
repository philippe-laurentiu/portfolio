interface NavigationElement {
  path: string
  pathVal: string
}

export const navigation = {
  home: {
    path: '/',
    pathVal: 'home'
  },
  about: {
    path: '/about',
    pathVal: 'about'
  },
  legalnotice: {
    path: '/legalnotice',
    pathVal: 'legalnotice'
  },
  certificats: {
    path: '/certificats',
    pathVal: 'certificats'
  },
  proexample: {
    path: '/projects/proexample',
    pathVal: 'proexample'
  },
  gitHub: {
    path: 'https://github.com/philippe-laurentiu',
    pathVal: 'github'
  },
  linkedIn: {
    path: 'https://www.linkedin.com/in/philippelaurentiu/',
    pathVal: 'linkedin'
  }
}

export const getValueForRoute = (route: string): string => {
  const values = Object.values(navigation)
  const res: NavigationElement | undefined = values.find((val: any) => val.path === route)
  return (res !== undefined) ? res.pathVal : 'home'
}
