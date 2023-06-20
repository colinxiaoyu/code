import * as React from "react";
import { useAtomValue, useSetAtom } from "jotai";

import { currentValueAtom, debouncedValueAtom } from "../../../state";



const SearchCom: React.FC = () => {

  const currentValue = useAtomValue(currentValueAtom);
  const setDebouncedValue = useSetAtom(debouncedValueAtom);

  return (<div>
    <input
      value={currentValue}
      type="text"
      onChange={(e) => {
        setDebouncedValue(e.target.value)
      }}
    />
  </div>)
}

export default SearchCom;