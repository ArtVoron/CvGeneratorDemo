import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import { NavLink } from 'react-router-dom';

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    cv: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    icon: {
        fontSize: 56,
        color: '#5D6D7E'
    },
    titleText:{
        textDecoration:'none'
    }
}

let showListCv = () => {
    window.location.href = '/list-cv'
}

export const Header = () => {

    return (
        <>
            <Grid item lg={12} xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={4}>
                                <NavLink to="/">
                                    <ViewCompactIcon style={styles.icon} />
                                </NavLink>
                            </Grid>
                            <Grid item lg={4} xs={4} style={styles.title}>
                                <NavLink to="/" style={styles.titleText}>
                                    <Typography variant='h5'>ATB COMPANY</Typography>
                                </NavLink>
                            </Grid>
                            <Grid item lg={4} xs={4} style={styles.cv}>
                                <Button variant='outlined'
                                    onClick={() => showListCv()}>List CV's</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}


