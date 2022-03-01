import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons({addItem}) {

    function handleClick() {
        addItem();
    }
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => addItem()}>Add</Button>
        </Stack>
    );
}

export default BasicButtons;