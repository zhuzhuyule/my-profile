import { Person } from '@mui/icons-material';
import FormTextField from '../../../components/form/text-field';
import Section from './section';

function IntroduceSection() {
  return (
    <Section name="person.title" icon={<Person />}>
      <FormTextField name="person.detail" />
    </Section>
  );
}

export default IntroduceSection;
