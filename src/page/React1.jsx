import React from 'react'
import styled from 'styled-components'

const React1 = () => {
  return (
    <Outer>
    <h3>1. React란?</h3>
    <div>제가 생각하는 React란 html,css,javascript만을 이용해서 웹 페이지를 만들 때와 다르게 동적으로 사용자와 직접 소통할 수 있게 만들어 주는 자바스크립트의 라이브러리라고 생각합니다. React는 index.html 파일 하나로 화면을 DOM에 랜더링해주는 SPA로 원하는 내용을 component로 구성하게 됩니다. 
    처음 DOM에 랜더링 되면 mount됐다고 표현합니다. 그 다음 state값 변화, props의 상태값이 변화하게 되면 가상DOM에서 update된 부분만 체크하여 실제 돔에 업데이트 합니다. 이후 component가 제거되게 되면 unmount되었다고 표현하게 됩니다. 
    </div>
    <h3>2. 상태관리의 개념</h3>
    <div>상태관리란 component를 랜더링하는 과정에 있어 영향을 미칠 수 있는 값들을 관리하는 것을 뜻합니다. 리액트의 개념에서도 언급했듯이 화면에 원하는 정보가 리랜더링 되게 하려면 state값이나 props의 값이 변해야 하기 때문에 상태관리가 필요합니다.  </div>
    </Outer>
  )
}

export default React1

const Outer =styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`