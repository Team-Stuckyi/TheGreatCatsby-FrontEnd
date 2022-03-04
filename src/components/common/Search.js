/**
 * @filename    : Search.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 검색 컴포넌트
 */

// Core
import styled from 'styled-components';

// Components
import Button from 'components/common/Button';
import Input from 'components/common/Input';

const SearchBox = styled.div`
    > Input {
        margin-left: 4px;
        margin-right: 4px;
        padding-left: 10px;
        height: 38px;
        line-height: 38px;
    }
`;

const Search = ({
    categoryName = '전체회원',
    categoryCount = 0,
    unit = '명',
    selectBoxItems = ['번호', '아이디', '내용'],
    inputBoxPlaceholder = '내용을 입력하세요',
    onSubmit,
    onChange,
    onQueryChange,
}) => {
    // optionList 컴포넌트 렌더링 함수
    const optionList = selectBoxItems.map((v, i) => (
        <option key={v} value={v}>
            {v}
        </option>
    ));

    return (
        <form onSubmit={onSubmit}>
            {/** countBox 렌더링 **/}
            <div style={{ maxWidth: '150px', maxHeight: '40px', display: 'flex', marginBottom: '5px' }}>
                <span
                    style={{
                        width: '50%',
                        float: 'left',
                        borderRadius: '5px 0px 0px 5px',
                        padding: '8px',
                        backgroundColor: 'var(--blue100)',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textAlign: 'center',
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
                        paddingRight: '12px',
                        backgroundColor: 'var(--gray100)',
                        fontWeight: 'bold',
                        textAlign: 'right',
                        fontSize: '14px',
                    }}
                >
                    {categoryCount}
                    {unit}
                </span>
            </div>
            <SearchBox>
                {/* SelectBox 렌더링 */}

                <select
                    style={{
                        width: '130px',
                        height: '42px',
                        backgroundColor: 'var(--gray200)',
                        borderRadius: '6px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                    onChange={onChange}
                >
                    {optionList}
                </select>
                {/* InputBox 렌더링 */}
                <Input
                    Inptype="full"
                    InpWidth="250px"
                    borderColor="var(--black)"
                    placeholder={inputBoxPlaceholder}
                    onChange={onQueryChange}
                ></Input>

                {/* Button 렌더링 **/}
                <Button type="submit" width="100px" height="38px" bgColor="var(--blue300)">
                    검색
                </Button>
            </SearchBox>
        </form>
    );
};

export default Search;
