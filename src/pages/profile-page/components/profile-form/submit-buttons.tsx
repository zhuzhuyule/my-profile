import { Button, Grid } from '@mui/material';
import { debounce } from 'lodash';
import { useTransition } from 'react';
import { useFormContext } from 'react-hook-form';
import FadeTransition from '../../../../components/fade-transition';
import { useFormStatus } from '../../../../providers/form-status-provider';

function SubmitButtons({ onSubmit }: { onSubmit: () => void }) {
  const {
    reset,
    formState: { isDirty },
  } = useFormContext();
  const { readonly, toggleReadonly } = useFormStatus();

  const [, startTransition] = useTransition();

  const handleCancel = debounce(
    () => {
      toggleReadonly();
      startTransition(() => reset());
    },
    1000,
    { leading: true, trailing: false },
  );

  const handleSubmit = debounce(onSubmit, 1000, { leading: true, trailing: false });

  return (
    <FadeTransition readonly={readonly} readonlyComponent={null} lineHeight={0} height={0} width="100%" ml={-2} mt={-1}>
      <Grid container spacing={2} m={0} justifyContent="flex-end">
        <Grid item xs={6} md={2}>
          <Button variant="outlined" fullWidth onClick={handleCancel}>
            取消
          </Button>
        </Grid>
        <Grid item xs={6} md={2}>
          <Button variant="contained" fullWidth onClick={handleSubmit} disabled={!isDirty}>
            保存
          </Button>
        </Grid>
      </Grid>
    </FadeTransition>
  );
}

export default SubmitButtons;
