const hideDiv = (id) => {
  document.getElementById(id).style.display = "none";
}
const showDiv = (id) => {
  document.getElementById(id).style.display = "block";
}

//스텝에 따른 화면 분기 세팅
hideDiv("start-step-1");
hideDiv("start-step-2");
hideDiv("start-step-3");
hideDiv("start-step-4");
hideDiv("start-step-5");
hideDiv("login");

/*
 * 버튼에 따른 화면 전개
 */
//시작하기 버튼
document.getElementById('button-step-1').onclick = async function () {
  hideDiv("start-step-1");
  showDiv("logo");
  showDiv("start-step-2");
}

//니모닉을 통한 복구 버튼
document.getElementById('button-step-2-1').onclick = async function () {
  alert('[TBD] 개발 중');
}

//니모닉 생성 버튼 -> 암호 생성
document.getElementById('button-step-2-2').onclick = async function () {
  hideDiv("start-step-2");
  showDiv("start-step-3");
}

//패스워드 생성
document.getElementById('button-step-3').onclick = async function () {
  let pwd1 = document.getElementById("pwd1-step-3").value;
  let pwd2 = document.getElementById("pwd2-step-3").value;
  
  if(pwd1 == pwd2 && pwd1.length > 3) {
    let encPwd = SHA256(pwd1);
    console.log(encPwd);
    
    

    hideDiv("start-step-3");
    showDiv("start-step-4");
  } else if(pwd1.length < 3) {
    alert("패스워드는 4자리 이상이어야 합니다.");
  }else {
    alert('입력한 두 패스워드가 일치하지 않습니다');
  }
}

//스텝4 버튼(니모닉 생성)
document.getElementById('createMnemonic').onclick = async function () {
  try {
    chrome.storage.sync.get('password', function(result) {
      const PWD = result.password;
      
      //니모닉 코드 발급


      
      
    });
  } catch (e) {
    console.log(e);
  }
}

//로그인
document.getElementById('button-login').onclick = async function () {
  let pwd = document.getElementById("pwd-login").value;
  chrome.storage.local.get('password', function(result) {
    //만약 사용자의 입력값을 SHA256으로 해싱한 값이 저장되어 있는 값과 같다면
    let encPwd = result.password;

    if(SHA256(pwd) == encPwd) {
      //브라우저에 임시 저장
      chrome.storage.sync.set({'password': pwd}, function(result) {
        //저장된 패스워드 확인
        chrome.storage.sync.get('password', function(result) {
          //document.getElementById('password-sync').innerText= '임시 저장 패스워드 ' + result.password;
          window.location.href = "/pages/main.html";
        });
      });
    } else {
      alert('패스워드가 일치하지 않습니다');
    }

  })
}
