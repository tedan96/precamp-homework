let 시간반복
function 요청전송() {
    clearInterval(시간반복)
    const 랜덤한숫자 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("인증번호띄우기").innerText = 랜덤한숫자

    let 시간 = 3
    시간반복 = setInterval(function() {
        const 분 = String(Math.floor(시간 / 60)).padStart(2, "0")
        const 초 = String(시간 % 60).padStart(2, "0")
        document.getElementById("타이머").innerText = `${분}:${초}`
        시간 = 시간 - 1
        if(시간 < 0){
            clearInterval(시간반복)
            document.getElementById("인증완료").src = "./assets/button_primary.png"
            const target = document.getElementById("버튼아이디")
            target.disabled = true
        }
    }, 1000)
    document.getElementById("인증완료").src = "./assets/button_primary2.png"
}

function 인증완료버튼() {
    document.getElementById("인증완료").src = "./assets/button_primary4.png"
    clearTimeout(시간반복)
}

function 가입() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    alert(`회원가입을 축하합니다.(가입일시: ${year}-${month}-${day})`)
    document.getElementById("수강생목록").innerHTML = `<div onclick="수강생이름"()>수강생</div>`

    
    
}

function 수강생이름() {
    const 정보 = document.getElementById("이름정보").innerText
    console.log(정보)
    alert(`안녕하세요. ${정보}`)
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
    인증선택 = document.getElementById("버튼아이디")
    // console.log("인증선택", 인증선택)

    const 이름확인 = 이름 !== ""
    const 이메일확인 = 이메일 !== ""
    const 비밀번호체크 = 비밀번호 !== ""
    const 비밀번호같은지 = 비밀번호확인 !== ""
    const 전화번호확인 = 전화번호 !== ""
    const 자기소개확인  = 자기소개 !== "" 
    const 성별확인 = (여자선택 === true) || (남자선택 === true)
    const 동의확인 = 동의선택 === true
    const 인증 = 인증선택 === true




    if(이메일확인 === true && 이름확인 === true && 비밀번호같은지 === true && 비밀번호체크 === true && 전화번호확인 === true && 성별확인 === true && 동의확인 === true && 자기소개확인 === true && 인증 === true) {
        console.log("ggg")
        document.getElementById("가입버튼이미지").src = "./assets/가입버튼2.png"
        document.getElementById("가입버튼이미지").disabled = false
    } else {
        document.getElementById("가입버튼이미지").style = "background-color: none" //원래 색으로 돌리기
        document.getElementById("가입버튼이미지").disabled = true
    }
}

function 이메일확인() {
    let check = document.getElementById("이메일정보").value
    let email_form = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
}
