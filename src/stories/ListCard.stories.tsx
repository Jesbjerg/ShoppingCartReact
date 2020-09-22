import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ListCard from "../components/ListCard/ListCard";

storiesOf("ListCard", module)
  .add("with text", () => (
    <ListCard ></ListCard>
  )).add("without text", () => ( 
      <ListCard ></ListCard>
  ));
  
