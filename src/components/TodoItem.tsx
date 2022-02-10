import React, { useState } from "react";
import { Stack, Label, IconButton, Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton, TextField } from '@fluentui/react';

function TodoItem(props: any) {
    const [openDeleteModal, setOpenModal] = useState(true);
    const [editLabel, setEditLabel] = useState(false); 

    const deleteTodo = (id: number ) => {
        props.deleteTodo(id);
        setOpenModal(true);
    }

    return (
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between" onMouseEnter={() => setEditLabel(!editLabel)} onMouseLeave={() => setEditLabel(!editLabel)}>
            <Label >{props.todo.name}</Label> 
            {editLabel ?
                <Stack horizontal>
                    <IconButton iconProps={{ iconName: 'edit' }}/>
                    <IconButton
                        iconProps={{ iconName: 'trash' }}
                        className="clearButton"
                        onClick={() => {setOpenModal(!openDeleteModal)}}
                    />
                </Stack>
                 :
                null
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