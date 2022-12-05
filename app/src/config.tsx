interface NavigationElement {
  path: string
  pathVal: number
}

export const navigation = {
  home: {
    path: '/',
    pathVal: 0
  },
  about: {
    path: '/about',
    pathVal: 1
  }
}

export const getValueForRoute = (route: string): number => {
  const values = Object.values(navigation)
  const res: NavigationElement | undefined = values.find((val: any) => val.path === route)
  return (res !== undefined) ? res.pathVal : 0
}
