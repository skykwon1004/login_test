import './App.css';
import Main from './Main';
import { useEffect, useState } from 'react';

function App() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // useEffect(() => {
  //   fetch(`http://125.190.42.149:8000/board/send-comment?id=${id}}&pw=${pw}`, {
  //     method: "GET"
  //   }).then(res => res.json()).then(res => {
  //     console.log(res);

  //   });
  // }, []);

  return (
    <>
      <Main />

      <div>
        <input
          type="text"
          placeholder='id'
          onChange={(e) => {
            setId(e.target.value);
            // console.log(id)
          }}
        >
        </input>
        <input
          type="text"
          placeholder='pw'
          onChange={(e) => {
            setPw(e.target.value);
            //  console.log(pw)
          }}
        >
        </input>
        <button
          onClick={
            () => {
              console.log(id)
              console.log(pw)

              if (id == '') {
                alert("id를 입력하시오");
                return;
              }

              if (pw == '') {
                alert("pw를 입력하시오");
                return;
              }

              // 한글 체크
              function checkKor(str) {
                const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
                if (regExp.test(str)) {
                  alert('한글 입력 하지마')
                  return true;
                }
                // else {
                //   return false;
                // }
              }

              checkKor(id);

              console.log(`http://125.190.42.149:8000/board/send-comment?id=${id}&pw=${pw}`)
              fetch(`http://125.190.42.149:8000/board/send-comment?id=${id}&pw=${pw}`, {
                method: "GET"
              }).then(res => res.json()).then(res => {
                console.log(res.status);
                if (res.status == 'success') {
                  alert("로그인 성공");
                } else {
                  alert("로그인 실패!!!!!!!!!!!!");
                }
              });
            }
          }
        >
          로그인
        </button>
      </div>
    </>
  );
}

export default App;
