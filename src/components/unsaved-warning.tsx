import { useEffect } from 'react';

interface UnsavedWarningProps {
  isEditing: boolean;
}

function UnsavedWarning({ isEditing }: UnsavedWarningProps) {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isEditing) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isEditing]);

  return null;
}

export default UnsavedWarning;
