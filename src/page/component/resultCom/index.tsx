import React from "react";

import { useAtom } from "jotai";

import { resultAtom } from "../../../state";

import './index.css';

const ResultCom: React.FC = () => {

  const [result] = useAtom(resultAtom)

  function renderItems() {
    return result?.entries?.map(item => {
      return <div key={item.API} className="com_result_item">{item.Description}</div>
    })
  }

  if (!result) {
    return null
  }

  return (
    <div className="com_result"
      data-testid="result">
      {

        <p>Total: {result?.count}</p>

      }
      {!!result?.count
        ? renderItems()
        : <div className="com_result_empty">Empty</div>}
    </div>
  )
}

export default ResultCom;