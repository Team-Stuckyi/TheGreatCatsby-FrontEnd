/**
 * @filename    : Stars.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 별점 컴포넌트
 */

const Stars = ({ starCount = 5, starSize = 20 }) => {
  // 별 문자열을 조합하는 함수 (empty 인자는 빈 별인지, 아닌지를 구분하기 위해 사용)
  const createStars = (empty = false) => {
    // 별점 문자열을 저장할 변수 초기화
    let starText = ''
    // 빈 별점을 반환하고자 할 경우 별 최대값인 5에서 받은 별점을 뺀 값만큼 별을 리턴함
    if (empty) for (let i = 0; i < 5 - starCount; i++) starText += '★';
    // 받은 별만큼 반환하고자 할 경우 점수만큼 반복하며 별을 리턴함
    else for (let i = 0; i < starCount; i++) starText += '★';
    // 완성된 별 문자열을 리턴
    return starText;
  }

  return (
    <>
      <p>
        {/* 받은 별점 출력 */}
        <span style={{ fontSize: 40, color: '#ffd700' }}>{createStars()}</span>
        {/* 빈 별점 출력 */}
        <span style={{ fontSize: 40, color: '#eee' }}>{ createStars(true) }</span>
      </p>
    </>
  );
}

export default Stars;