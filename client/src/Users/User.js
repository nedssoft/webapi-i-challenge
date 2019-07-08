import React from "react";
import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";
import { FaEdit,FaRegTrashAlt } from "react-icons/fa";

const moveBtn = keyframes`
  from {
    margin-left: 20px;
  }

  to {
    margin-left: 0;
  }
`
const UserWrapper = styled.div`
  width: 300px;
  padding: 0.8rem;
  text-align: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  margin: 1rem auto;
  position: relative;
`;
const ControlButtons = styled.div`
  position: absolute;
  right: 15px;
  top: 20px;
  display: flex;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  margin-top: 22px;
  margin-right: 2rem;
  strong {
    font-weight: bold;
  }
  p {
    line-height: 1.5;
    font-size: 1.2rem;
  }
`
const EditBtn = styled(FaEdit)`
  color:  orange;
  &:hover {
    animation: ${moveBtn} 0.2s;
  }
`
const DeleteBtn = styled(FaRegTrashAlt)`
  color: red;
  cursor: pointer;
  &:hover {
    animation: ${moveBtn} 0.2s;
  }
`
export default function User({ user }) {
  return (
    <UserWrapper>
      <TextWrapper>
        <p>
          <strong>Name: </strong> {user.name}
        </p>
        <p>
           <strong>Bio: </strong> {user.bio}
        </p>
      </TextWrapper>
      <ControlButtons>
        <Link to={`friends/${user.id}/edit`}><EditBtn /></Link>
      </ControlButtons>
    </UserWrapper>
  );
}
