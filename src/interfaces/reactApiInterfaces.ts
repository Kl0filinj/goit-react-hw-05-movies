export interface ILocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null | ILocation;
}