import React, { useState } from "react";
import { Stack, Label, IconButton, Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton } from '@fluentui/react';

function TodoItem(props: any) {
    const [openDeleteModal, setOpenModal] = useState(true);

    const deleteTodo = (id: number ) => {
        props.deleteTodo(id);
        setOpenModal(true);
    }

    return (
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
                <Label>{props.todo.name}</Label>
                <IconButton
                    iconProps={{ iconName: 'trash' }}
                    className="clearButton"
                    onClick={() => {setOpenModal(!openDeleteModal)}}
                />
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