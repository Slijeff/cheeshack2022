import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

  
function Spot() {
  const [submittedValues, setSubmittedValues] = useState('');
  const form = useForm({
    initialValues: {
      Type: 'Dog',
      Location: 'Educational Sciences',
      Appearance: 'White/Orange',
      Disability: 'Leg/Deaf/Blind',
      Name: 'John',
      PhoneNumber: ' '
      // Age: 'Adult/'
      // Sex
    },

    // transformValues: (values) => ({
    //   fullName: `${values.firstName} ${values.lastName}`,
    //   age: Number(values.age) || 0,
    // }),
  });

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="Location"
          placeholder="Where you found the animal?"
          {...form.getInputProps('Location')}
        />
        <TextInput
          label="Appearance"
          placeholder="What does this animal look like?"
          mt="md"
          {...form.getInputProps('Appearance')}
        />
        <TextInput
          label="Disability"
          placeholder="Does this animal has any disability?"
          mt="md"
          {...form.getInputProps('Disability')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}
export default Spot;