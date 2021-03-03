import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';

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
        color:'#5D6D7E'
    }
}

export const Header = () => {

    return (
        <>
            <Grid item lg={12} xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={4}>
                                <ViewCompactIcon style={styles.icon} />
                            </Grid>
                            <Grid item lg={4} xs={4} style={styles.title}>
                                <Typography variant='h5'>ATB COMPANY</Typography>
                            </Grid>
                            <Grid item lg={4} xs={4} style={styles.cv}>
                                <Button variant='outlined'>List CV's</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}


