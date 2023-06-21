import * as React from "react";
import { useAtomValue, useSetAtom } from "jotai";

import { currentValueAtom, debouncedValueAtom } from "../../../state";
import './index.css'
import AutoTextarea from "../../../component/autoTextarea";



const SearchCom: React.FC = () => {

  const currentValue = useAtomValue(currentValueAtom);
  const setDebouncedValue = useSetAtom(debouncedValueAtom);

  function changeSearchText(text: string) {
    setDebouncedValue(text);
  }

  return (<div className="com_search">
    <p>keywords:</p>
    <div className="com_search_input">
      <AutoTextarea
        data-testid="input"
        value={currentValue}
        type="text"
        onChange={(e: any) => {
          changeSearchText(e.target.value)
        }}
      />
      {currentValue && <img src={require('./icon_close.svg')} onClick={() => changeSearchText('')} />}
    </div>
  </div>)
}

export default SearchCom;