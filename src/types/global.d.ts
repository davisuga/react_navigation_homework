interface Navigation {
  navigate:(routeName:string, prop:any) => void,
  params:any
}

type DefaultProps = {
  navigation:Navigation,
  route:any
}