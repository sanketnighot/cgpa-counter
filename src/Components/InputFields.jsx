import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


const InputFields = () => {
    
    const [csem1, setSem1] = useState("");
    const [csem2, setSem2] = useState("");
    const [csem3, setSem3] = useState("");
    const [csem4, setSem4] = useState("");
    const [csem5, setSem5] = useState("");
    const [csem6, setSem6] = useState("");
    const [csem7, setSem7] = useState("");
    const [csem8, setSem8] = useState("");
    var [psem1, setpSem1] = useState("");
    var [psem2, setpSem2] = useState("");
    var [psem3, setpSem3] = useState("");
    var [psem4, setpSem4] = useState("");
    var [psem5, setpSem5] = useState("");
    var [psem6, setpSem6] = useState("");
    var [psem7, setpSem7] = useState("");
    var [psem8, setpSem8] = useState("");
    var [avgptr, setAvgPtr] = useState(0.0); ;
    var [avgpercent, setAvgPer] = useState(0.0) ;

    const Reset = () => {
        setSem1("");
        setSem2("");
        setSem3("");
        setSem4("");
        setSem5("");
        setSem6("");
        setSem7("");
        setSem8("");
        setpSem1("");
        setpSem2("");
        setpSem3("");
        setpSem4("");
        setpSem5("");
        setpSem6("");
        setpSem7("");
        setpSem8("");
    }

    const calculateAvg = () => {
        var ptrs = [parseFloat(csem1), parseFloat(csem2), parseFloat(csem3), parseFloat(csem4), parseFloat(csem5), parseFloat(csem6), parseFloat(csem7), parseFloat(csem8)];
        var totalptr = 0 ;
        var evald = []
        ptrs.forEach((ptr, index) => {
            // eslint-disable-next-line
            if (ptr > 0) {
                evald.push(ptr)
            }
            
        
        })
        evald.forEach((ptr, index) => {
            // eslint-disable-next-line
            totalptr += ptr
        })
        avgptr = (totalptr/evald.length).toPrecision(3);
        if (avgptr < 7) {
            let perc = (7.1*(avgptr)+12).toPrecision(4)
            setAvgPer(perc);
            setAvgPtr(avgptr);
        } else {
            let perc = (7.4*(avgptr)+12).toPrecision(4)
            setAvgPer(perc);
            setAvgPtr(avgptr);
        }
        
    }


    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'csem1') {
            setSem1(value);
            if (value < 7) {
                psem1 = (7.1*(value)+12).toPrecision(4).toString() + "%";
                // eslint-disable-next-line
                if (value == 0) {
                    psem1 = "Sem 1 Percentage"
                }
                setpSem1(psem1)
            } 
            else{
                psem1 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem1(psem1)
            }
        }
        else if (name === 'csem2') {
            setSem2(value);
            if (value < 7) {
               psem2 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem2 = "Sem 2 Percentage"
                }
               setpSem2(psem2)
            } 
            else{
                psem2 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem2(psem2)
            }
        } 
        else if (name === 'csem3') {
            setSem3(value);
            if (value < 7) {
               psem3 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem3 = "Sem 3 Percentage"
                }
               setpSem3(psem3)
            } 
            else{
                psem3 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem3(psem3)
            }
        }
        else if (name === 'csem4') {
            setSem4(value);
            if (value < 7) {
               psem4 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem4 = "Sem 4 Percentage"
                }
               setpSem4(psem4)
            } 
            else{
                psem4 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem4(psem4)
            }
        } 
        else if (name === 'csem5') {
            setSem5(value);
            if (value < 7) {
               psem5 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem5 = "Sem 5 Percentage"
                }
               setpSem5(psem5)
            } 
            else{
                psem5 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem5(psem5)
            }
        }
        else if (name === 'csem6') {
            setSem6(value);
            if (value < 7) {
               psem6 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem6 = "Sem 6 Percentage"
                }
               setpSem6(psem6)
            } 
            else{
                psem6 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem6(psem6)
            }
        } 
        else if (name === 'csem7') {
            setSem7(value);
            if (value < 7) {
               psem7 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem7 = "Sem 7 Percentage"
                }
               setpSem7(psem7)
            } 
            else{
                psem7 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem7(psem7)
            }
        }
        else if (name === 'csem8') {
            setSem8(value);
            if (value < 7) {
               psem8 = (7.1*(value)+12).toPrecision(4).toString() + "%";
               // eslint-disable-next-line
               if (value == 0) {
                    psem8 = "Sem 8 Percentage"
                }
               setpSem8(psem8)
            } 
            else{
                psem8 = (7.4*(value)+12).toPrecision(4).toString() + "%";
                setpSem8(psem8)
            }
        } 
    }



    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 1</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem1" value={csem1} placeholder="Enter Sem 1 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }} />
                <FormControl type="text" name="psem1" value={psem1} placeholder = "Sem 1 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 2</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem2" value={csem2} placeholder="Enter Sem 2 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem2" value={psem2} placeholder = "Sem 2 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 3</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem3" value={csem3} placeholder="Enter Sem 3 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem3" value={psem3} placeholder = "Sem 3 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 4</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem4" value={csem4} placeholder="Enter Sem 4 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem4" value={psem4} placeholder = "Sem 4 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 5</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem5" value={csem5} placeholder="Enter Sem 5 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem5" value={psem5} placeholder = "Sem 5 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 6</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem6" value={csem6} placeholder="Enter Sem 6 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem6" value={psem6} placeholder = "Sem 6 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 7</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem7" value={csem7} placeholder="Enter Sem 7 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem7" value={psem7} placeholder = "Sem 7 Percentage" disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>Sem 8</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" name="csem8" value={csem8} placeholder="Enter Sem 8 CGPA" 
                                            onChange={(event) => { onChangeHandler(event) }}/>
                <FormControl type="text" name="psem8" value={psem8} placeholder = "Sem 8 Percentage" disabled />
            </InputGroup>

            <center>
                <Button variant="success" onClick={() =>calculateAvg()}>Get Average</Button> &nbsp; &nbsp; &nbsp;
                <Button variant="danger" onClick={() =>Reset()}>Reset</Button>
                <br/><br/>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                        <th><center>Average CGPA</center></th>
                        <th><center>Average Percentage</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><center>{avgptr} CGPA </center></td>
                        <td><center>{avgpercent} %</center></td>
                        </tr>
                    </tbody>
                    </Table>
            </center>

        </>
    );
}

export default InputFields;