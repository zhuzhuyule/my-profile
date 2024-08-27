import { Button, CircularProgress, Dialog, DialogActions, DialogContent, Grid } from '@mui/material';
import debounce from 'lodash/debounce';
import { useState, useTransition } from 'react';
import { useFormContext } from 'react-hook-form';
import FadeTransition from '../../../../components/fade-transition';
import UnsavedWarning from '../../../../components/unsaved-warning';
import { useFormStatus } from '../../../../providers/form-status-provider';

function SubmitButtons({ onSubmit }: { onSubmit: () => void }) {
  const {
    reset,
    formState: { isDirty, isSubmitting },
  } = useFormContext();
  const { readonly, toggleReadonly } = useFormStatus();
  const [, startTransition] = useTransition();
  const [showConfirm, setShowConfirm] = useState(false);

  const hideConfirmModal = () => setShowConfirm(false);
  const showConfirmModal = () => setShowConfirm(true);
  const handleShowReadonly = (force = false) => {
    if (!force && isDirty) {
      showConfirmModal();
    } else {
      toggleReadonly();
      hideConfirmModal();
      startTransition(() => reset());
    }
  };
  const handleCancel = debounce(handleShowReadonly, 1000, { leading: true, trailing: false });
  const handleSubmit = debounce(onSubmit, 1000, { leading: true, trailing: false });

  return (
    <FadeTransition readonly={readonly} readonlyComponent={null} lineHeight={0} height={0} width="100%" ml={-2} mt={-1}>
      <Grid container spacing={2} m={0} justifyContent="flex-end">
        <Grid item xs={6} md={2}>
          <Button variant="outlined" fullWidth onClick={() => handleCancel()}>
            取消
          </Button>
        </Grid>
        <Grid item xs={6} md={2}>
          <Button variant="contained" fullWidth onClick={handleSubmit} disabled={!isDirty}>
            保存
          </Button>
        </Grid>
      </Grid>
      <UnsavedWarning isEditing={isDirty} />
      <Dialog open={isSubmitting}>
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <CircularProgress />
          更新中...
        </DialogContent>
      </Dialog>
      <Dialog open={isDirty && showConfirm}>
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          编辑信息未保存，是否确认取消编辑？
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCancel(true)}>确认取消</Button>
          <Button variant="outlined" onClick={hideConfirmModal} autoFocus>
            继续编辑
          </Button>
        </DialogActions>
      </Dialog>
    </FadeTransition>
  );
}

export default SubmitButtons;
