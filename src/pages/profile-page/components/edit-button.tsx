import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useFormStatus } from '../../../providers/form-status-provider';

function EditButton() {
  const { readonly, toggleReadonly } = useFormStatus();

  return (
    readonly && (
      <IconButton
        className="edit-btn"
        aria-label="edit"
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1,
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onClick={toggleReadonly}>
        <Edit />
      </IconButton>
    )
  );
}

export default EditButton;
