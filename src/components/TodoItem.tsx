import React, { useState } from "react";
import { Stack, Label, IconButton, Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton, TextField } from '@fluentui/react';

function TodoItem(props: any) {
    const [openDeleteModal, setOpenModal] = useState(true);
    const [hoverIcon, setHoverIcon] = useState(false);
    const [editLabel, setEditLabel] = useState(false);
    const [valueTodo, setvalueTodo] = useState('');

    const deleteTodo = (id: number ) => {
        props.deleteTodo(id);
        setOpenModal(true);
    }

    const handleChange = (e: any) => {
        console.log(e.currentTarget.value);
        setvalueTodo(e.currentTarget.value);
        // setEditLabel(!editLabel);
    } 

    const editTodo = (id: number, todoName: string) => {
        console.log(todoName);
        props.editTodo(id, todoName);
        setEditLabel(false);
    }

    return (
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between" onMouseEnter={() => setHoverIcon(!hoverIcon)} onMouseLeave={() => setHoverIcon(!hoverIcon)}>
            {!editLabel ? <Label >{props.todo.name}</Label> : 
            <TextField defaultValue={props.todo.name} onChange={handleChange}/>}
            {! hoverIcon
                ? null
                : editLabel
                ?
                <Stack horizontal>
                    <IconButton
                        iconProps={{ iconName: 'checkmark' }}
                        className="checkButton"
                        onClick={ () => {editTodo(props.todo.id, valueTodo)} }
                    />
                    <IconButton
                        iconProps={{ iconName: 'cancel' }}
                        className="cancelButton"
                        onClick={() => {setEditLabel(!editLabel)}}
                    />
                </Stack>
                :
                <Stack horizontal>
                    <IconButton
                        iconProps={{ iconName: 'edit' }}
                        className="editButton"
                        onClick={() => {setEditLabel(!editLabel)}}
                    />
                    <IconButton
                        iconProps={{ iconName: 'trash' }}
                        className="clearButton"
                        onClick={() => {setOpenModal(!openDeleteModal)}}
                    />
                </Stack>
            }
                
            </Stack>
            <Dialog 
                hidden={openDeleteModal}
                modalProps={{ isBlocking: false }}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: "Delete",
                    subText:
                        "Are you sure you want to delete this item?"
                }}
            >
                <DialogFooter>
                    <PrimaryButton
                        text="Yes"
                        onClick={() => { deleteTodo(props.todo.id) }}
                    />
                    <DefaultButton
                        text="No"
                        onClick={() => { setOpenModal(true) }}
                    />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
}

export default TodoItem