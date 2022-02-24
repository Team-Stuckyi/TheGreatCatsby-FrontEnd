/**
 * @filename    : Search.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 검색 컴포넌트
 */

import Button from 'components/common/Button';
import Input from 'components/common/Input';

const Search = ({
    categoryName = '전체회원',
    categoryCount = 0,
    selectBoxItems = ['번호', '아이디', '내용'],
    inputBoxPlaceholder = '내용을 입력하세요',
    searchBtnText = '검색',
}) => {
    // optionList 컴포넌트 렌더링 함수
    const optionList = selectBoxItems.map((v, i) => (
        <option key={v} value={v}>
            {v}
        </option>
    ));

    return (
        <div>
            {/* countBox 렌더링 */}
            <div style={{ maxWidth: '200px' }}>
                <span
                    style={{
                        width: '50%',
                        float: 'left',
                        borderRadius: '5px 0px 0px 5px',
                        padding: '8px',
                        backgroundColor: 'var(--blue100)',
                    }}
                >
                    {categoryName}
                </span>
                <span
                    style={{
                        width: '50%',
                        float: 'right',
                        borderRadius: '0px 5px 5px 0px',
                        padding: '8px',
                        backgroundColor: 'var(--gray100)',
                        marginBottom: '10px',
                    }}
                >
                    {categoryCount}
                </span>
            </div>
            {/* SelectBox 렌더링 */}
            <select style={{ width: '150px', height: '38px', backgroundColor: 'var(--gray200)' }}>{optionList}</select>

            {/* InputBox 렌더링 */}
            <Input InpWidth="180px" placeholder="내용을 입력하세요"></Input>

            {/* Button 렌더링 */}
            <Button width="100px" bgColor="var(--blue300)">
                검색
            </Button>
        </div>
    );
};

export default Search;
