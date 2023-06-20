import { atom } from 'jotai';
import atomWithDebounce from '../page/utils';

export const {
  isDebouncingAtom,
  debouncedValueAtom,
  currentValueAtom
} = atomWithDebounce("");


export const resultAtom = atom(async (get) => {
  const searchValue = get(debouncedValueAtom);
  if (!searchValue) {
    return undefined;
  }

  const response = await fetch(
    `/entries?category=${searchValue}`
  )

  const data: PostData = await response.json()

  return data;
});




type PostData = {
  count: number,
  entries: Array<Entries>
} | null

type Entries = {
  "API": string,
  "Description": string,
  "Auth": string,
  "HTTPS": boolean,
  "Cors": string,
  "Link": string,
  "Category": string
}





