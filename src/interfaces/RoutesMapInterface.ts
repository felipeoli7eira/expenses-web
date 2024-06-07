export default interface RoutesMapInterface {
  [key: string]: {
    name: string
    path: string
    description?: string
    component: React.ReactElement
  }
}
