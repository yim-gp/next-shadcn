import * as React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from "./dialog";
import { Button } from "./button";

// Multi-step Dialog (Wizard) Example
export function WizardDialog() {
    const [step, setStep] = React.useState(1);
    const totalSteps = 3;

    function nextStep() {
        setStep((s) => Math.min(s + 1, totalSteps));
    }
    function prevStep() {
        setStep((s) => Math.max(s - 1, 1));
    }
    function reset() {
        setStep(1);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Open Wizard</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Wizard Step {step} / {totalSteps}</DialogTitle>
                <div style={{ minHeight: 80 }}>
                    {step === 1 && <div>Step 1: ข้อมูลเบื้องต้น</div>}
                    {step === 2 && <div>Step 2: รายละเอียดเพิ่มเติม</div>}
                    {step === 3 && <div>Step 3: สรุปข้อมูล</div>}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
                    <Button onClick={prevStep} disabled={step === 1} variant="outline">ย้อนกลับ</Button>
                    {step < totalSteps ? (
                        <Button onClick={nextStep}>ถัดไป</Button>
                    ) : (
                        <DialogClose asChild>
                            <Button onClick={reset} variant="default">เสร็จสิ้น</Button>
                        </DialogClose>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
