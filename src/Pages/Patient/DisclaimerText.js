import React from 'react';
import { Typography } from '@material-ui/core';


export default function Disclaimer() {
    return (
        <div>
            <Typography variant='h4'>Disclaimer:</Typography>
            <Typography variant='h6'>
                Please note that if you are willing to use MedBay's symptom checker that you understand and accept the following:
            </Typography>
            <Typography style={{ marginTop: "10px", color: "red" }} >Please read ALL the list below clearly and DO NOT skip any point.</Typography>
            <ul style={{ paddingLeft: "3%", marginTop: "10px" }}>
                <li style={{ marginTop: "10px" }}>
                    <Typography>This tool does not provide medical advice. It is intended for informational purposes only.
                        It is not a substitute for professional medical advice, diagnosis or treatment.
                        Never ignore professional medical advice in seeking treatment because of something the symptom checker has diagnosed you with.
                        If you think you may have a medical emergency, immediately call your doctor or dial the emergency services.</Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography >
                        The information displayed in this symptom checker is not intended nor implied to be a substitute for professional medical advice,
                        it is provided for educational purposes only. You assume full responsibility for how you choose to use this information.
                        Always seek the advice of your physician or other qualified healthcare provider before starting any new treatment or discontinuing an existing treatment.
                        Talk with your healthcare provider about any questions you may have regarding a medical condition.
                    </Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography>All of the information enetered in the syptom checker will not link to your MedBay account in anyway.
                        This means that you can use the sypmtom checker for any indivdual around you not necessarily yourself.
                    </Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography>Please try to answer all questions pertaining to your symptoms as accurately as possible, to guarantee maximum benefit from our services.</Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography>Please note that the symptom checker needs good internet access to work properly. If at anytime the syptom checker stops working, it is most probably a loss of internet access.</Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography>This symtom checker is powered by <a href="https://infermedica.com/">Infermedica</a>.</Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography>Now that you have read all of the above, you can use the symptom checker and use the information however you please assuming full responsibility on how you use it.</Typography>
                </li>
                <li style={{ marginTop: "10px" }}>
                    <Typography>Click the button on the right side to start using!</Typography>
                </li>

            </ul>
        </div>
    )
}

