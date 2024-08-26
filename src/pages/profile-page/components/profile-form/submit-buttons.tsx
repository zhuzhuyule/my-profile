import { Button, Grid } from '@mui/material';
import FadeTransition from '../../../../components/fade-transition';
import { useFormStatus } from '../../../../providers/form-status-provider';

function SubmitButtons() {
  const { readonly, toggleReadonly } = useFormStatus();

  return (
    <FadeTransition readonly={readonly} readonlyComponent={null} lineHeight={0} height={0} width="100%" ml={-2} mt={-1}>
      <Grid container spacing={2} m={0} justifyContent="flex-end">
        <Grid item xs={6} md={2}>
          <Button variant="outlined" fullWidth onClick={toggleReadonly}>
            取消
          </Button>
        </Grid>
        <Grid item xs={6} md={2}>
          <Button variant="contained" fullWidth type="submit">
            保存
          </Button>
        </Grid>
      </Grid>
    </FadeTransition>
  );
}

export default SubmitButtons;
