import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { AddNewCVModal } from '../modal/AddNewCVMoval';
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

export const MainContent = () => {
    const [showModal, setShowModal] = useState(false)

    let modalHandler = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <AddNewCVModal
                open={showModal}
                close={modalHandler} />
            <Grid item lg={12} xs={12} style={styles.button}>
                <Button variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
                    onClick={modalHandler}>Create new CV
                </Button>
            </Grid>

            <Grid item lg={12} xs={12}>
                <Card>
                    <CardContent>
                        <Typography>Modul 1</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={12} xs={2}>
                <Card>
                    <CardContent>
                        <Typography>Modul 2</Typography>
                    </CardContent>
                </Card>
            </Grid>


        </>
    );
}
