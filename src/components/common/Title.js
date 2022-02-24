/**
 * @filename    : Title.js
 * @author      : 김우영 (https://github.com/0x000613)
 * @description : 타이틀 컴포넌트
 */

const Title = ({ content = '테스트', contentFontSize = '28px', contentFontWeight = 'bold', boxWidth = '300px' }) => {
    return (
        <div style={{ width: boxWidth }} className="page-title">
            <p style={{ fontSize: contentFontSize, fontWeight: contentFontWeight }}>{content}</p>
            <hr
                style={{
                    borderWidth: '1.5px 0px 0px 0px',
                    borderStyle: 'solid',
                    borderColor: 'var(--gray600)',
                    opacity: '0.3',
                    height: '1px',
                }}
            />
        </div>
    );
};

export default Title;
