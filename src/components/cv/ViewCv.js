import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Header } from "../header/Header";

export const ViewCv = () => {

    let printCv = (e) => {
        window.location.href = '/print-cv/' + e
    }

    return (
        <>
            <Header />
            <Grid item lg={12} xs={12}>
                <Card>
                    <CardContent>
                        <Typography>View CV</Typography>
                        <Button variant='contained'
                            color='primary'
                            onClick={() => { printCv(1) }}>
                            Print CV
                        </Button>
                    </CardContent>
                </Card>
            </Grid>


        </>
    );
}
