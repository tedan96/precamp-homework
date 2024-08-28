function 보내기() {
    const 정보 = document.getElementById("이메일정보보내기").value
    const 내가입력한이메일 = 정보
    const 분리된결과 = 내가입력한이메일.split("@")
    const 이메일앞부분 = 분리된결과[0]
    const 이메일뒷부분 = 분리된결과[1]
    const 새로운이메일앞부분글자 = 이메일앞부분.slice(length, 4)
    const 새로운이메일앞부분별표 = "****"
    const 새로운이메일앞부분 = 새로운이메일앞부분글자 + 새로운이메일앞부분별표
    alert(`회원가입을 축하합니다. 가입하신 이매알은 ${새로운이메일앞부분}@${이메일뒷부분}입니다.`)
    
}