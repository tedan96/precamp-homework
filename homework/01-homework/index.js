let 시간반복

function 요청전송() {
    const target= document.getElementById("버튼아이디")
    
    document.getElementById("타이머").style.display = "block"

    clearInterval(시간반복)
    const 랜덤한숫자 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("인증번호띄우기").innerText = 랜덤한숫자

    let 시간 = 179
    시간반복 = setInterval(function() {
        const 분 = String(Math.floor(시간 / 60)).padStart(2, "0")
        const 초 = String(시간 % 60).padStart(2, "0")
        document.getElementById("타이머").innerText = `${분}:${초}`
        시간 = 시간 - 1
        if(시간 < 0){
            clearInterval(시간반복)
            document.getElementById("인증완료").src = "./assets/button_primary.png"
            target 
            target.disabled = true
        }
    }, 1000)
    target.disabled = false
    document.getElementById("인증완료").src = "./assets/button_primary2.png"
}

function 인증완료버튼() {
    document.getElementById("인증완료").src = "./assets/button_primary4.png"
    document.getElementById("타이머").style.display = "none"
  
    clearTimeout(시간반복)
}

function 가입() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    alert(`회원가입을 축하합니다.(가입일시: ${year}-${month}-${day})`)
    const 이메일 = document.getElementById("이메일정보").value
    const 이름 = document.getElementById("이름정보").value
    const 비밀번호 = document.getElementById("비밀번호정보").value
    const 비밀번호확인 = document.getElementById("비밀번호확인정보").value
    const 전화번호 = document.getElementById("전화번호정보").value
    const 자기소개 = document.getElementById("자기소개정보").value
    const 여자선택 = document.getElementById("female").checked
    const 남자선택 = document.getElementById("male").checked
    const 동의선택 = document.getElementById("agreement").checked
    
    document.getElementById("수강생목록").innerHTML = `
                <div onclick="가입자보여주는기능()"><img src = "./assets/프로필 이미지.png"/>수강생</div>`
                    
}
function 가입자보여주는기능() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    let 성별 = document.getElementById("female").checked
    const 이메일 = document.getElementById("이메일정보").value
    const 이름 = document.getElementById("이름정보").value
    const 비밀번호 = document.getElementById("비밀번호정보").value
    const 전화번호 = document.getElementById("전화번호정보").value
    const 자기소개 = document.getElementById("자기소개정보").value
    // const 여자선택 = document.getElementById("female").checked
    // const 남자선택 = document.getElementById("male").checked
    let 동의선택 = document.querySelector('input[id="agreement"]:checked').value
    if(성별 !== true ){
        성별 = "남자"
    } else {
        성별 = "여자"
    }

    if(동의선택 !== true ){
        동의선택 = "Y"
    } else {
        동의선택 = "N"
    }

    const 전화번호분리 = 전화번호.split("-")
    const 가운데번호 = 전화번호분리[1]
    전화번호분리[1] = ""
    const length = 가운데번호.length
    for(let i = 0; i < 가운데번호.length; i++){
        전화번호분리[1] += "*"
    }
    const 비밀번호별표 = []
    for(let i = 0; i < 비밀번호.length; i++){
        비밀번호별표[i] = "*"
    }
    const 비밀번호표시 = 비밀번호별표.join('')
   
    alert(`
        이름: ${이름}
        이메일: ${이메일}
        비밀번호: ${비밀번호표시}
        성별: ${성별}
        전화번호: ${전화번호분리[0]}-${전화번호분리[1]}-${전화번호분리[2]}
        동의여부: ${동의선택}
        자기소개: ${자기소개}
        (가입일시: ${year}-${month}-${day})
        `)
}
let 인증선택 = false
function 인증확인() {
    const 이메일 = document.getElementById("이메일정보").value
    const 이름 = document.getElementById("이름정보").value
    const 비밀번호 = document.getElementById("비밀번호정보").value
    const 비밀번호확인 = document.getElementById("비밀번호확인정보").value
    const 전화번호 = document.getElementById("전화번호정보").value
    const 자기소개 = document.getElementById("자기소개정보").value
    const 여자선택 = document.getElementById("female").checked
    const 남자선택 = document.getElementById("male").checked
    const 동의선택 = document.getElementById("agreement").checked
    const 인증선택 = document.getElementById("버튼아이디")
    // 인증선택 = document.getElementById("버튼아이디")
    // console.log("인증선택", 인증선택)

    const 이름확인 = 이름 !== ""
    const 이메일확인 = 이메일 !== ""
    const 비밀번호체크 = 비밀번호 !== ""
    const 비밀번호같은지 = 비밀번호확인 !== ""
    const 전화번호확인 = 전화번호 !== ""
    const 자기소개확인  = 자기소개 !== "" 
    const 성별확인 = (여자선택 === true) || (남자선택 === true)
    const 동의확인 = 동의선택 === true

    const 인증확인 = 인증선택 === true
    if(이메일확인 === true && 이름확인 === true && 비밀번호같은지 === true && 비밀번호체크 === true  && 전화번호확인 === true && 성별확인 === true && 동의확인 === true && 자기소개확인 === true) {
        document.getElementById("가입버튼이미지").src = "./assets/가입버튼2.png"
        document.getElementById("가입버튼").disabled = false
    } else {
        document.getElementById("가입버튼이미지").style = "background-color: none" //원래 색으로 돌리기
        document.getElementById("가입버튼").disabled = true
    }
}

function 이메일확인() {
    let check = document.getElementById("이메일정보").value
    let email_form = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    
}
