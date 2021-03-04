import { Dialog, Typography, DialogTitle, DialogActions, DialogContent, Button, TextField, Grid, Divider, TextareaAutosize } from "@material-ui/core"
import { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';

const styles = {
    button: {
        margin: '0px 5px'
    },

    buttonsGrid: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    dialog: {
        overflow: 'hidden'
    }
}

export const AddNewCVModal = (props) => {

    const [countFieldSkills, setCountFieldSkills] = useState(2)
    const [countFieldProgects, setCountFieldProgects] = useState(2)
    const [countProgects, setCountProgects] = useState(1)
    const [error, setError] = useState(false)

    let fieldsHadler = (e, fieldType) => {
        if (e > 1 && e < 9) {
            if (fieldType === 'skill') {
                setCountFieldSkills(e)
            } else {
                setCountFieldProgects(e)
            }
        }
    }

    let handleForSubmit = (e) => {
        let skillsFields = []
        let progectsFields = []
        Array.from(Array(countFieldSkills).keys()).map(element => {
            debugger
            skillsFields.push(e.target['skill' + element].value)
        })
        let a = skillsFields
        debugger
    }

    return (
        <Dialog maxWidth='md' open={props.open}>

            <DialogTitle><Typography variant='h5'>NEW CV</Typography></DialogTitle>

            <DialogContent style={styles.dialog}>
                <Grid container spacing={2}>
                    <form onSubmit={handleForSubmit}>
                        <Grid item lg={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={12} xs={12}>
                                    <Typography variant='h6'>Main information</Typography>
                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item lg={3} xs={3}>
                                    <TextField name='firstName' variant='outlined' label='First name'></TextField>
                                </Grid>
                                <Grid item lg={3} xs={3}>
                                    <TextField name='lastName' variant='outlined' label='Last Name'></TextField>
                                </Grid>
                                <Grid item lg={3} xs={3}>
                                    <TextField name='experience' variant='outlined' label='Experience (years)'
                                        inputProps={{
                                            type: 'number',
                                            min: '0'
                                        }}></TextField>
                                </Grid>

                                <Grid item lg={9} xs={9}>
                                    <Typography variant='h6'>Professional skills</Typography>
                                </Grid>
                                <Grid item lg={3} xs={3} style={styles.buttonsGrid}>
                                    <Button variant='contained'
                                        size='small'
                                        style={styles.button}
                                        color='secondary'
                                        onClick={() => fieldsHadler(countFieldSkills - 1, 'skill')}>
                                        <RemoveIcon />
                                    </Button>
                                    <Button variant='contained'
                                        size='small'
                                        style={styles.button}
                                        color='primary'
                                        onClick={() => fieldsHadler(countFieldSkills + 1, 'skill')}>
                                        <AddIcon />
                                    </Button>
                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Divider />
                                </Grid>
                                {
                                    Array.from(Array(countFieldSkills).keys()).map((element, index) => {
                                        return (
                                            <Grid item lg={3} xs={3} key={index}>
                                                <TextField variant='outlined' name={'skill' + element} label={'skill#' + (element + 1)}></TextField>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>

                        <Grid item lg={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={9} xs={9}>
                                    <Typography variant='h6'>Progect activities</Typography>
                                </Grid>
                                <Grid item lg={3} xs={3} style={styles.buttonsGrid}>
                                    <Button variant='contained'
                                        size='small'
                                        style={styles.button}
                                        color='secondary'
                                        onClick={() => fieldsHadler(countFieldProgects - 1, 'progect')}>
                                        <RemoveIcon />
                                    </Button>
                                    <Button variant='contained'
                                        size='small'
                                        style={styles.button}
                                        color='primary'
                                        onClick={() => fieldsHadler(countFieldProgects + 1, 'progect')}>
                                        <AddIcon />
                                    </Button>
                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Divider />
                                </Grid>
                                {
                                    Array.from(Array(countProgects).keys()).map((element, index) => {
                                        return (
                                            <Grid container spacing={3} key={index}>
                                                <Grid item lg={12} xs={12}>
                                                    <Typography>Progect #{element}</Typography>
                                                </Grid>
                                                <Grid item lg={3} xs={3}>
                                                    <TextField variant='outlined' key={element} name={'progect' + element + 'position'} label={'position'}></TextField>
                                                </Grid>
                                                {
                                                    Array.from(Array(countFieldProgects).keys()).map(element => {
                                                        return (
                                                            <Grid item lg={3} xs={3}>
                                                                <TextField variant='outlined' name={'skill' + element} label={'skill#' + (element + 1)}></TextField>
                                                            </Grid>
                                                        )
                                                    })
                                                }

                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                        <Grid item lg={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item lg={9} xs={9}>
                                    <Typography variant='h6'>Discription</Typography>
                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Divider />
                                </Grid>

                                <Grid item lg={12} xs={12}>
                                    <Button variant='contained'
                                        color='primary'
                                        type='submit'
                                        startIcon={<DoneIcon />}>
                                        Create cv
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={props.close}>
                    Close
            </Button>
            </DialogActions>
        </Dialog>
    )
}