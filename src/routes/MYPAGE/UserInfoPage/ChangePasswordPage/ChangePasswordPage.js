
import React, { useState,useEffect }  from "react"
import styled from "styled-components"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import PwdChangeSuccessModal from "../../../../components/modal/PwdChangeSuccessModal";
import PwdChangeErrorModal from "../../../../components/modal/PwdChangeErrorModal";

const UpperContainer = styled.div`
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;

#logoImage {
  width: 150px;
  height: 130px;
}
`

const Title = styled.div`
  display: flex;
  margin: 50px auto 0;
  width: 35%;
  
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
`

const UnderLine = styled.div`
  border: 1px solid gray;
  height: 1px;
  width: 40%;
  margin: 5px auto 0;
`

const MainContents = styled.div`
  display: flex;
  margin: 30px auto 0;
  justify-content: center;

  .customInput {
    width:300px;
    margin-bottom: 20px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  margin: 40px auto;
  justify-content: center;
`

const ChangePasswordPage = () => {
  const [currentData, setCurrentData] = useState({
    currentPassword: "",
    confirmCurrentPassword: "",
    newPassword: ""
  })

  const [newData, setNewData] = useState({
    currentPassword: "",
    confirmCurrentPassword: "",
    newPassword: ""
  })

  const [modals, setModals] = useState({
    successModal: false,
    errorModal: false
  });

  const { successModal, errorModal } = modals
  
    useEffect(() => {
      const url = `http://34.64.151.119/api/users`
      const requestData = {
        currentPassword: currentData.currentPassword
      };
      const jsonRequestData = JSON.stringify(requestData)

      axios.post(url, jsonRequestData)
      .then((response) => {
      
        console.log(response.data)
      })
      .catch((error) => {
        console.error("error", error)
      })
    },[])




  const handlePassword = (event) => {
    setCurrentData((prevData) => ({
      ...prevData,
      currentPassword: event.target.value
    }))
  }

  const handleConfirmPassWord = (event) => {
    setCurrentData((prevData) => ({
      ...prevData,
      confirmCurrentPassword: event.target.value
    }))
  }

  const handleNewPassWord = (event) => {
    setCurrentData((prevData) => ({
      ...prevData,
      newPassword: event.target.value
    }))
  }

  const passwordChange = () => {
  
    if (
      currentData.currentPassword === currentData.confirmCurrentPassword &&
      currentData.currentPassword !== currentData.newPassword
    ) 
    return;
  };

  return (
    <div>
      <UpperContainer>
        <img id="logoImage" src="/main-logo.png" alt="로고" />
      </UpperContainer>
      <Title>
        <h4>비밀번호 변경</h4>
      </Title>
      <UnderLine />
      <MainContents>
        <Form className="form">
          <Form.Group className="pwdInput">
            <Form.Label className="pwdLabel">비밀번호</Form.Label>
            <Form.Control className="customInput" type="password" placeholder="비밀번호" 
            autoComplete="off" onChange={handlePassword} />
          </Form.Group>
          <Form.Group className="pwdConfirmInput">
            <Form.Label className="pwdConfirmLabel">비밀번호 확인</Form.Label>
            <Form.Control className="customInput" type="password" placeholder="비밀번호" 
            autoComplete="off" onChange={handleConfirmPassWord} />
          </Form.Group>
          <Form.Group className="newPwdInput">
            <Form.Label className="newPwdLabel">새로운 비밀번호</Form.Label>
            <Form.Control className="customInput" type="password" placeholder="비밀번호" 
            autoComplete="off" onChange={handleNewPassWord} />
          </Form.Group>
        </Form>
      </MainContents>
      <ButtonContainer>
        <Button id="SignUpButton" variant="primary" onClick={passwordChange}>
          비밀번호 변경
        </Button>
      </ButtonContainer>
      <PwdChangeSuccessModal show={successModal} onHide={() => 
        setModals((prevModals) => ({ ...prevModals, successModal: false }))} />
      <PwdChangeErrorModal show={errorModal} onHide={() => 
        setModals((prevModals) => ({ ...prevModals, errorModal: false }))} />
    </div>
  )
}

export default ChangePasswordPage