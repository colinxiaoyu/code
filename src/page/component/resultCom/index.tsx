import React, { Suspense, useEffect, useMemo } from "react";

import { useAtom, useAtomValue } from "jotai";

import { resultAtom, isDebouncingAtom } from "../../../state";


const ResultCom: React.FC = () => {

  const [result] = useAtom(resultAtom)


  function renderItems() {
    return result?.entries?.map(item => {
      return <div key={item.API}>{item.Description}</div>
    })
  }

  return (
    <div>
      {renderItems()}
    </div>
  )
}

export default ResultCom;