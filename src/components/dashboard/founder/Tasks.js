import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { Box, Card, Checkbox, CardHeader, Typography, FormControlLabel } from '@material-ui/core';
import { Stack } from '@material-ui/';

// ----------------------------------------------------------------------

const TASKS = [
  'Update PitchDeck',
  'Call Sarah RE:potential investment',
  'Interview for app designer',
  'Plan marketing for November',
  'Plan elevator pitch for meeting with potential investors',
];

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object,
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={<Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />}
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through',
              }),
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="Tasks" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem key={task} task={task} formik={formik} checked={values.checked.includes(task)} />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
