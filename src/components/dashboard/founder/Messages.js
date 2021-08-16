import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

// Imports from Material Ui
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

//Styling
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: '#2B3D5B',
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#deba54',
  backgroundImage: `linear-gradient(135deg, ${alpha('#deba54', 0)} 0%, ${alpha('#deba54', 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

export default function Messages() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="teenyicons:message-text-alt-outline" />
      </IconWrapperStyle>
      <Typography style={{ color: 'white' }} variant="h3">
        10
      </Typography>
      <Typography style={{ color: '#deba54' }} variant="subtitle2" sx={{ opacity: 0.72 }}>
        New Messages
      </Typography>
    </RootStyle>
  );
}
