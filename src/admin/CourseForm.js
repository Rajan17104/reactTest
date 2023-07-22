import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Formik, useFormik } from 'formik';
import { string } from 'i/lib/util';
import React from 'react';
import * as yup from 'yup';

function CourseForm(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let courseschema = yup({
        name: string().required(),
        fees: string().required()
    });

    const formik = useFormik({
        validationSchema: courseschema,

        initialValues: {
            name: '',
            fees: ''
        },
        onSubmit: (values, action) => {
            action.resetForm();
        }
    })

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = formik;

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        <span>{errors.name && touched.name ? errors.name : null}</span>
                        <TextField
                            margin="dense"
                            id="fees"
                            label="fees"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.fees}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span>{errors.fees && touched.fees ? errors.fees : null}</span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default CourseForm;