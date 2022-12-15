interface NavigationElement {
  path: string
  pathVal: number
}

export const navigation = {
  home: {
    path: '/',
    pathVal: 1
  },
  about: {
    path: '/about',
    pathVal: 0
  },
  proexample: {
    path: '/projects/proexample',
    pathVal: 2
  }
}

export const getValueForRoute = (route: string): number => {
  const values = Object.values(navigation)
  const res: NavigationElement | undefined = values.find((val: any) => val.path === route)
  return (res !== undefined) ? res.pathVal : 0
}
