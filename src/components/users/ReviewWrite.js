/**
 * @filename    : ReviewWrite.js
 * @author      : 이병민 (https://github.com/Byeongminlee)
 * @description : 리뷰페이지에서 리뷰 등록(내용, 사진 ,평점)
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServerUrl } from 'key';
import axios from 'axios';
import { getReviewWrite } from 'slices/users/ReviewWriteSlice';
import { getReviewList } from 'slices/users/ReviewListSlice';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Input from 'components/common/Input';
import styled from 'styled-components';
import Alert from 'components/common/Alert';

const WriterBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const InputBox = styled.div`
    width: 900px;
    border: 1px solid var(--gray300);
    padding: 20px;
    border-radius: 5px;
    margin: 50px 0;
`;

const Box = styled.div`
    display: inline-block;
    text-align: center;
    padding: 20px 0;
    width: 200px;
    margin-top: 30px;
`;

const InputFileBox = styled.div`
    display: inline-block;
    text-align: center;
    padding: 20px 0;
    width: 250px;
    margin-top: 60px;
    margin: 10px 40px 0 10px;
`;

const InputFile = styled.label`
    border: 1px solid var(--primary);
    border-radius: 5px;
    color: var(--primary);
    cursor: pointer;
    padding: 10px;
`;

const InputFileName = styled.p`
    max-width: 200px;
    font-size: 12px;
    text-align: center;
    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

// star 부분
const ClickStar = styled.span`
    font-size: 40px;
    color: ${props => (props.on ? 'var(--yellowstar)' : 'var(--gray100)')};
    cursor: pointer;
`;
// star 부분

const ReviewWrite = ({ prodId }) => {
    /**  로그인 정보를 가져와서 저장할 state */
    const [login, setLogin] = useState();
    /**  주문 확인에 사용하는 state */
    // 주문이 되어있을 경우 true, 아닐경우 false 가 저장 된다.
    const [isOrder, setIsOrder] = useState('');

    /** 이미지를 저장하는 state */
    const [imgFile, setImgFile] = useState('');
    /** 이미지 이름을 저장하는 state */
    // 업로드한 이미지를 프론트 화면에서 띄어주기 위해 사용한다.
    const [imgFileName, setImgFileName] = useState('');

    /** 평점(별) 저장 state */
    const [starCount, setStarCount] = useState();
    /** 평점(별)의 클릭이벤트를 사용하기 위한 state */
    // false는 빈별, true는 클릭된 별을 의미한다.
    const [clickStarValue, setClickStarValue] = useState([false, false, false, false, false]);

    /** input에 리뷰를 작성할 경우 저장하는 state */
    const [reviewComment, setReviewComment] = useState();

    /** 리뷰 작성 가능 여부 */
    // false : 리뷰를 작성 할 수 없다.
    // true : 리뷰를 작성 할 수 있다.
    // 사용자가 로그인되어 있고, 해당 상품을 주문한 이력이 있다면 true로 바꾸어 준다.
    const [available, setAvailable] = useState(false);

    /**  알럿창 띄우기용 여부확인 */
    // false일 경우 : 로그인 X or 주문내역 X
    // true일 경우 : 로그인 O AND 주문내역 O
    // true일 경우에는 Alert창이 보이고, false일 경우 보이지 않는다.
    const [isAlert, setIsAlert] = useState(false);

    // dispatch 생성
    const dispatch = useDispatch();
    // 리뷰를 생성하면 해당 loading 값이 바뀐다.
    // 이 loading값으로 useEffect하여 새로운 리뷰값 재요청한다.
    const { rt, rtmsg, item, loading } = useSelector(state => state.ReviewWrite);

    // 로그인 값을 가져와서 login state에 저장한다.
    useEffect(() => {
        // user_id를 저장
        setLogin('2');
    }, []);

    /** 별 생성 */
    useEffect(() => {
        let data = [];
        for (let i = 0; i < 5; i++) {
            if (i < starCount) {
                data.push(true);
            } else {
                data.push(false);
            }
        }

        setClickStarValue(() => data);
    }, [starCount]);

    /** 주문 이력 확인 */
    // 로그인 값이 들어왔을때 실행한다.
    useEffect(() => {
        // 로그인 아이디 + 상품번호와 일치하는 값이 있으면 요청이 성공할 것이다.
        // 로그인이 되어있고 상품아이디 값이 있을떄 실행
        if (login && prodId) {
            (async () => {
                let result = null;

                try {
                    result = await axios.get(ServerUrl + `/orders/${login}/${prodId}`);

                    // 결과의 길이가 1보다 작을 경우 값이 없는 것이다.
                    if (result.data.item.length < 1) {
                        // 해당 계정은 해당 상품을 주문하지 않았을 경우, 리뷰 X => false
                        setAvailable(false);
                    } else if (result.data.item[0].order_id) {
                        setIsOrder(result.data.item[0].order_id);
                        // 해당 계정은 해당 상품을 주문하지 않았을 경우, 리뷰 O => true
                        setAvailable(true);
                    }
                } catch (err) {
                    console.log(err);
                }
            })();
        }
    }, [login]);

    /** 값 추가시 리뷰 리스트 재요청 */
    // Redux로 관리하기 때문에 review페이지에서 따로 이벤트를 생성하지 않고도
    // 해당 dispatch를 통해 데이터 최신화 시킬 수 있다.
    // -> 데이터 최신화로 리뷰리스트에 바로 값이 추가되게 된다.
    useEffect(() => {
        dispatch(getReviewList(prodId));
    }, [loading]);

    /** 사진 선택 버튼을 클릭시 실행되는 함수 */
    const handleInputFile = event => {
        // 파일이름 저장
        setImgFileName(event.target.files[0].name);
        // 파일 저장
        setImgFile(event.target.files[0]);
    };

    /** 별 클릭 이벤트 */
    const starHandler = e => {
        let target = parseInt(e.target.dataset.count);
        // 0부터 시작하므로 별점(평점)은 +1하여 저장한다.
        setStarCount(target + 1);

        // 클릭된 별이 한개만 있을 경우 0점으로 초기화 할 수 있게 하는 부분
        if (clickStarValue[0] === true && clickStarValue[1] === false && target === 0) {
            return setClickStarValue(() => [false, false, false, false, false]);
        }
    };

    /** 작성하는 리뷰를 onChange를 통해 state에 저장 */
    const onChangeReview = event => {
        const {
            target: { value },
        } = event;
        setReviewComment(value);
    };

    /** Alert 버튼 클릭시 알럿창 닫기 */
    const alertHandler = () => {
        setIsAlert(false);
    };

    /** 리뷰 작성 */
    const onReviewPost = async () => {
        // 로그인이 되어있고 주문한 이력이 있을 시 실행
        if (available) {
            const formData = new FormData();
            formData.append('imgFile', imgFile);
            formData.append('review_text', `${reviewComment}`);
            formData.append('stars', `${starCount}`);
            formData.append('order_id', `${isOrder}`);

            // ReviewWriteSlice로 리뷰 추가
            dispatch(getReviewWrite(formData));
        } else {
            /** 위의 조건을 만족시키지 못할 경우 알럿창 닫기 */
            setIsAlert(true);
        }
    };

    return (
        <Container>
            <WriterBox>
                <InputBox>
                    <Input
                        Inptype="full"
                        fontColor="var(--black);"
                        borderColor={'var(--white)'}
                        onChange={onChangeReview}
                        value={reviewComment}
                    />
                </InputBox>
                <InputFileBox>
                    {imgFileName ? <InputFileName>{imgFileName}</InputFileName> : <InputFileName>이미지를 선택해주세요.</InputFileName>}
                    <InputFile htmlFor="input-file">사진 선택</InputFile>
                    <input type="file" name="imgFile" id="input-file" style={{ display: 'none' }} onChange={handleInputFile} />
                </InputFileBox>
                <Box>
                    <div>
                        {clickStarValue.map((value, idx) => (
                            <ClickStar on={clickStarValue[idx]} data-count={idx} onClick={starHandler}>
                                ★
                            </ClickStar>
                        ))}
                    </div>
                    <Button size="lg" onClick={onReviewPost}>
                        리뷰 등록
                    </Button>
                </Box>
            </WriterBox>
            {isAlert ? <Alert text="상품을 구매한 고객만 작성하실수 있습니다." onClickConfirm={alertHandler} /> : <></>}
        </Container>
    );
};

export default ReviewWrite;
