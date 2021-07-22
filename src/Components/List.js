import React, {useState} from 'react'
import Flexview from 'react-flexview'
import {Form, FormGroup, Button, ControlLabel, FormControl, Table } from 'rsuite'

const {Column, HeaderCell, Cell} = Table


export const List = () => {

    const [formValue, setFormValue] = useState({item: ''})
    const [listItems, setListItems] = useState([])
   
 

  
    console.log(listItems)
    const onSubmit = () => {
        console.log('hit on submit')
       setListItems({...listItems}, formValue)
    }

    console.log(formValue)
    
    return (
<div>
    <Flexview vAlignContent='center' hAlignContent='center'>
    <Form onChange={setFormValue} value={formValue}>
        <h1>Add Your List Items: </h1>
        <FormGroup>
            <ControlLabel>To Do Item</ControlLabel>
            <FormControl 
            name='item'
            />
        </FormGroup>
        <FormGroup>
            <Button  appearance="ghost" onClick={onSubmit}>Submit</Button>
        </FormGroup>
    </Form>
    </Flexview>
    <Flexview vAlignContent='center' hAlignContent='center'>
           <Table data={listItems}>
        <Column>
        <HeaderCell>Item</HeaderCell>
        <Cell dataKey='item'/>
        </Column>
    </Table>
    </Flexview>
    </div>
    )
}

export default List