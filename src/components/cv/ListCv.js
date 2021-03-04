import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Header } from "../header/Header";


export const ListCv = () => {

    let viewCv = (e) => {
        window.location.href = '/view-cv/' + e
    }
    return (
        <>
            <Header />
            <Grid item lg={12} xs={12}>
                <Card>
                    <CardContent>
                        <Typography>List CV</Typography>
                        <Button variant='contained'
                            color='primary'
                            onClick={() => { viewCv(1) }}>
                            View CV
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
