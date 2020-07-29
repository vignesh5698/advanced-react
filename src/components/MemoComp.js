import React from 'react'

function MemoComp(props) {
  return (
    <div>
      Memo component: {props.name}
    </div>
  )
}

export default React.memo(MemoComp);
