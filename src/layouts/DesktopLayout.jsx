import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

function DesktopLayout( {activeStep, steps} ) {
    return (
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map( (step, index) => (
          <Step key={index}>
            <StepLabel>
              { step.label }
            </StepLabel>
            <StepContent>
              { step.component }
            </StepContent>
          </Step>
        ))}
      </Stepper>
    )
}

export default DesktopLayout;