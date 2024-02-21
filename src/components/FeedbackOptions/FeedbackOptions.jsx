import React from 'react';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

export default FeedbackOptions;
