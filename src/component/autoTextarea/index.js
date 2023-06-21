import React, { useRef, useEffect, useCallback } from 'react';
import calculateNodeHeight from './calculateNodeHeight';


const AutoTextarea = (props) => {

  const ref = useRef();

  useEffect(() => {
    const style = calculateNodeHeight(
      ref.current,
      false,
    );
    ref.current.style.height = style.height + 'px'
  }, [props])

  function onEdit (e) {
    const style = calculateNodeHeight(
      ref.current,
      false,
    );
    ref.current.style.height = style.height + 'px'
    props.onChange(e)
  }

  function onFocus () {
    props.onFocus && props.onFocus()
  }

  function onBlur () {
    props.onBlur && props.onBlur()
  }

  return (
    <textarea {...props} onChange={onEdit} ref={ref}
      onBlur={onBlur}
      onFocus={onFocus}></textarea>
  )
}



export default AutoTextarea;
