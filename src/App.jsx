import { BrowserView, MobileView } from 'react-device-detect';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useWizardContext } from "./contexts/WizardContext"
import DesktopLayout from './layouts/DesktopLayout';
import MobileLayout from './layouts/MobileLayout';

export function WizardPrev() {
  const { activeStep, handlePrev } = useWizardContext();

  if (activeStep === 0) return null;

  return (
    <Button 
      sx={{ mr: 1 }}
      variant="contained"
      onClick={handlePrev}>
      Previous
    </Button>
  );
}

export function WizardNext() {
  const { activeStep, numSteps } = useWizardContext();

  if (activeStep > numSteps - 1) return null;

  return (
    <Button
      variant="contained"
      type="submit">
      Next
    </Button>
  );
}


function App() {
  const { activeStep, steps } = useWizardContext();

  return (
    <>
      <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
        <BrowserView>
          <DesktopLayout steps={steps} activeStep={activeStep}></DesktopLayout>
        </BrowserView>
        <MobileView>
          <MobileLayout steps={steps} activeStep={activeStep}></MobileLayout>
        </MobileView>
      </Box>
    </>
  )
}

export default App
