import React from "react";
import styled from "styled-components";

export function Note(props){
    return(
        <Wrapper data-note={props["data-note"]} className='note'>
            {props.id}
            <Title>{props.title.substring(0, 80) + (props.title.length > 80 ? "...":"")}</Title>
            <Content>
                {props.content.substring(0, 180) + (props.content.length > 180 ? "...":"")}
            </Content>

            <Creation>
                <p>{props.creation.hour}</p>
                <p>{props.creation.date}</p>
            </Creation>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
    min-height: 200px;

    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
   /* align-content: space-between;*/
    flex:0 0 49%;

    background: white;
    border-radius: 10px;
    position: relative;
    
    margin: 10px 0;
    cursor: pointer;
    padding: 10px;
    overflow: auto;
`;

export const Title = styled.h2`
    font-size: 18px;
    margin: 10px 0;
`;

export const Content = styled.p`
    max-width: 100%;
    /*line-height: 25px;*/
    font-size: 14px;
`;

export const Creation = styled.div`
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-around;*/
  
    /*margin: 10px 0;*/
    max-width: 100%;
    position: absolute;
    bottom: 10px;
    background-color: #FEBC01;
    padding: 2px 5px;
    border-radius: 5px;
   
    p{  
        color: white;
        font-size: 12px;
    }

    p:nth-child(1){
        margin-right: 10px;
    }
`;



