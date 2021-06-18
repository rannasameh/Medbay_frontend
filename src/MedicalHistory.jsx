import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup, TextField } from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Multiselect } from "multiselect-react-dropdown";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
const diseases=["Anemia","Asthma","Cancer","Gout","Diabetes","Emotional Disorder",
    "Epillepsy Seizuers",'Gallstones,Heart Disease',"Rheumatic Fever",
    "Digestive Problems",'Ulcerative colitis',"Ulcer disease","Hepatitis",
    "Kidney disease","Liver disease","Sleep Apena","Thyroid problems","Venereal diseases",
    "Neurological disorders","Bleeding disorder","Lung disesase","Emphysema"]
const habits=["Smoke","Drug addiction","Follow a certain diet","Alcoholic","Others"]

  const BloodTypes = [
    "A RhD positive (A+)",
    "A RhD negative (A-)",
    "B RhD positive (B+)",
    "B RhD negative (B-)",
    "O RhD positive (O+)",
    "O RhD negative (O-)",
    "AB RhD positive (AB+)",
    "AB RhD negative (AB-)",
    "None"
  ];
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));


export default function Review(props) {
  const [operationinputList, setoperationInputList] = React.useState([{operation_name:"",
  operation_date:""}]);
  const [allergyinputList, setallergyInputList] = React.useState([{allergy:""}]);
  const [diseaseinputList, setdiseaseInputList] = React.useState([{disease:""}]);
  const [CurrentMedinputList, setdCurrentMedInputList] = React.useState([{current_medication:""}]);
  const [FamilyallergyinputList, setFamilyallergyInputList] = React.useState([{family_allergy:""}]);
  const [FamilydiseaseinputList, setFamilydiseaseInputList] = React.useState([{family_disease:""}]);

  const handleOperationInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...operationinputList];
    list[index][name] = value;
    setoperationInputList(list);
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
        operations:operationinputList}
    })
  };
 
  const handleOpeationRemoveClick = index => {
    const list = [...operationinputList];
    list.splice(index, 1);
    setoperationInputList(list);
  };
 
  const handleOperationAddClick = () => {
    setoperationInputList([...operationinputList, { 
    operation_name:"",
   operation_date:"", } ]);
  };
    
  const handleAllergyInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...allergyinputList];
    list[index][name] = value;
    setallergyInputList(list);
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
        allergies:allergyinputList}
    })
  };
 
  const handleallergyRemoveClick = index => {
    const list = [...allergyinputList];
    list.splice(index, 1);
    setallergyInputList(list);
  };
 
  const handleAllergyAddClick = () => {
    setallergyInputList([...allergyinputList, { 
    allergy:"",
     } ]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...diseaseinputList];
    list[index][name] = value;
    setdiseaseInputList(list);
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
        otherIllnesses:diseaseinputList}
    })
  };
 
  const handleRemoveClick = index => {
    const list = [...diseaseinputList];
    list.splice(index, 1);
    setdiseaseInputList(list);
  };
 
  const handleAddClick = () => {
      setdiseaseInputList([...diseaseinputList, {disease:""} ]);
  };

  const handleInputChangeMed = (e, index) => {
    const { name, value } = e.target;
    const list = [...CurrentMedinputList];
    list[index][name] = value;
    setdCurrentMedInputList(list);
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
        medications:CurrentMedinputList}
    })
  };
 
  const handleRemoveClickMed = index => {
    const list = [...CurrentMedinputList];
    list.splice(index, 1);
    setdCurrentMedInputList(list);
  };
 
  const handleAddClickMed = () => {
    setdCurrentMedInputList([...CurrentMedinputList, {current_medication:""} ]);
  };
  
  const handleFamilyAllergyInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...FamilyallergyinputList];
    list[index][name] = value;
    setFamilyallergyInputList(list);
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
        family_allergies:FamilyallergyinputList}
    })
  };
 
  const handleFamilyAllergyRemoveClick = index => {
    const list = [...FamilyallergyinputList];
    list.splice(index, 1);
    setFamilyallergyInputList(list);
  };
 
  const handleFamilyAllergyAddClick = () => {
    setFamilyallergyInputList([...FamilyallergyinputList, { 
    family_allergy:"",
     } ]);
  };

  const handleFamilyInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...FamilydiseaseinputList];
    list[index][name] = value;
    setFamilydiseaseInputList(list);
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
        family_other_illnesses:FamilydiseaseinputList}
    })
  };
 
  const handleFamilyRemoveClick = index => {
    const list = [...FamilydiseaseinputList];
    list.splice(index, 1);
    setFamilydiseaseInputList(list);
  };
 
  const handleFamilyAddClick = () => {
      setFamilydiseaseInputList([...FamilydiseaseinputList, {family_disease:""} ]);
  };

  const classes = useStyles();
  function HandleChange(event){
    const {name,value}=event.target
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
      [name]:value}
    })
    
      }
      function Onselectdisease(selectedList, selectedItem){
        props.fn(prevValue=>{
          return{ 
            ...prevValue,
          diseases:selectedList}
        })
        
        }
        function onRemovedisease(selectedList, removedItem) {
          props.fn(prevValue=>{
            return{ 
              ...prevValue,
            diseases:selectedList}
          })
        }
        function Onselectfamilydisease(selectedList, selectedItem){
          props.fn(prevValue=>{
            return{ 
              ...prevValue,
              family_diseaeses:selectedList}
          })
          
          }
          function onRemovefamilydisease(selectedList, removedItem) {
            props.fn(prevValue=>{
              return{ 
                ...prevValue,
                family_diseaeses:selectedList}
            })
          }
          function Onselecthabits(selectedList, selectedItem){
            props.fn(prevValue=>{
              return{ 
                ...prevValue,
                special_habits:selectedList}
            })
            
            }
            function onRemovedhabits(selectedList, removedItem) {
              props.fn(prevValue=>{
                return{ 
                  ...prevValue,
                  special_habits:selectedList}
              })
            }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Medical history
      </Typography>
      <Grid container spacing={3} style={{marginBottom:"5px"}}>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 ,marginBottom:"10px"}}
            autoComplete="Height"
            name="height"
            fullWidth
            id="Height"
            label="Height"
            autoFocus
            value={props.inputValues.height}
            onChange={HandleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">cm</InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            value={props.inputValues.weight}
            onChange={HandleChange}
            id="Weight"
            label="Weight"
            name="weight"
            autoComplete="Weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
      <TextField
        
            fullWidth
            variant='outlined'
            id="BloodeType"
            select
            label="Bood Type"
            name="blood_type"
            value={props.inputValues.blood_type}
            onChange={HandleChange}
            style={{ marginBottom:"10px"}}
          >
            {BloodTypes.map((option) => (
              <MenuItem value={option}> {option} </MenuItem>
            ))}
          </TextField>
          
      <FormGroup>
      <Typography style={{marginBottom:"10px"}} gutterBottom>
      Please list any drug allergies
      </Typography>
      <div >
                            { allergyinputList.map((x, i) => {
                                return (
                                <div className="box">
                                <Grid container>
                                <Grid item xs={6}>
                                    <TextField
                                     variant='outlined'
                                     fullWidth
                                     style={{ marginBottom:"10px"}}
                                    name="allergy"
                                    placeholder="Allergy"
                                    value={x.allergy}
                                    onChange={e => handleAllergyInputChange(e, i)}
                                    />
                                    </Grid>
                                    <Grid item xs={6} style={{paddingLeft:"20px"}}>
                                    <div className="btn-box">
                                    {allergyinputList.length - 1 === i && <Button onClick={handleAllergyAddClick}><AddCircleOutlineIcon/></Button>}
                                    {allergyinputList.length !== 1 && <Button
                                       
                                        onClick={() => handleallergyRemoveClick(i)}><RemoveIcon/></Button>}
                                    </div>
                                    </Grid>
                                    </Grid>
                                </div>
                                );
                            })}
                            </div>
        <Typography gutterBottom>
        Select all diseases that apply
      </Typography>
   
              <Multiselect
              style={{  chips: { background: "#01579b" }, searchBox: { marginBottom:"10px" }}}
          options={diseases}
          isObject={false}
          onSelect={Onselectdisease}
          onRemove={onRemovedisease}
        />
        
        <Typography gutterBottom>
     Other illnesses
      </Typography>
      <div >
              {  diseaseinputList.map((x, i) => {
                  return (
                  <div className="box">
                  <Grid container>
                  <Grid item xs={6}>
                      <TextField
                        variant='outlined'
                        fullWidth
                        style={{ marginBottom:"10px"}}
                      name="disease"
                      placeholder="Disease"
                      value={x.OtherIllnesses}
                      onChange={e => handleInputChange(e, i)}
                      
                      
                      />
                      </Grid>
                      <Grid item xs={6} style={{paddingLeft:"20px"}}>
                      <div className="btn-box">
                      {diseaseinputList.length - 1 === i && <Button onClick={handleAddClick}><AddCircleOutlineIcon/></Button>}
                      {diseaseinputList.length !== 1 && <Button
                          onClick={() => handleRemoveClick(i)}><RemoveIcon/></Button>}
                      </div>
                      </Grid>
                      </Grid>
                  </div>
                  );
              })}
                            </div>
         <Typography gutterBottom style={{marginBottom:"10px"}}>
    Operations
      </Typography>
      <div >
                            { operationinputList.map((x, i) => {
                                return (
                                <div className="box">
                                <Grid container >
                                <Grid item xs={6}>
                                    <TextField
                                     variant='outlined'
                                     fullWidth
                                    name="operation_name"
                                    style={{ marginBottom:"10px"}}
                                    placeholder="Operation name"
                                    value={x.operation_name}
                                    onChange={e => handleOperationInputChange(e, i)}
                                    />
                                    </Grid>
                                    <Grid item xs={3} style={{paddingLeft:'20px'}}>
                                    <TextField  
                                    style={{ marginBottom:"10px"}}
                                    variant='outlined'
                                    name="operation_date"
                                    type='date'
                                    placeholder="Operation Date"
                                    value={x.operation_date}
                                    onChange={e => handleOperationInputChange(e, i)}
                                    />
                                     </Grid>
                                     <Grid item xs={3} style={{paddingLeft:"70px"}}>
                                    <div className="btn-box">
                                    {operationinputList.length - 1 === i && <Button onClick={handleOperationAddClick}><AddCircleOutlineIcon/></Button>}
                                    {operationinputList.length !== 1 && <Button
                                        
                                        onClick={() => handleOpeationRemoveClick(i)}><RemoveIcon/></Button>}
                                    </div>
                                    </Grid>
                                    </Grid>
                                </div>
                                );
                            })}
                            </div>
       <Typography gutterBottom>
     Please list your current medications
      </Typography>
      <div >
              {  CurrentMedinputList.map((x, i) => {
                  return (
                  <div className="box">
                  <Grid container>
                  <Grid item xs={6}>
                      <TextField
                        variant='outlined'
                        fullWidth
                        style={{ marginBottom:"10px"}}
                      name="current_medication"
                      placeholder="Medication name"
                      value={x.current_medication}
                      onChange={e => handleInputChangeMed(e, i)}
                      
                      />
                      </Grid>
                      <Grid item xs={6} style={{paddingLeft:"20px"}}>
                      <div className="btn-box">
                      {CurrentMedinputList.length - 1 === i && <Button onClick={handleAddClickMed}><AddCircleOutlineIcon/></Button>}
                      {CurrentMedinputList.length !== 1 && <Button
                          onClick={() => handleRemoveClickMed(i)}><RemoveIcon/></Button>}
                      </div>
                      </Grid>
                      </Grid>
                  </div>
                  );
              })}
                            </div>
    
         </FormGroup>
      
      <FormGroup>
      <Typography  gutterBottom>
     Special habits(please check all that apply)
      </Typography>
      <Multiselect
          style={{  chips: { background: "#01579b" }, searchBox: { marginBottom:"10px" }}}
          options={habits}
          isObject={false}
          onSelect={Onselecthabits}
          onRemove={onRemovedhabits}
        />
      </FormGroup>
      <Typography variant="h6" gutterBottom>
       Family medical history
      </Typography>
      <FormGroup>
      <Typography gutterBottom>
      Please list any drug allergies
      </Typography>
      <div >
                            { FamilyallergyinputList.map((x, i) => {
                                return (
                                <div className="box">
                                <Grid container>
                                <Grid item xs={6}>
                                    <TextField
                                     variant='outlined'
                                     fullWidth
                                     style={{ marginBottom:"10px"}}
                                    name="family_allergy"
                                    placeholder="Allergy"
                                    value={x.family_allergy}
                                    onChange={e => handleFamilyAllergyInputChange(e, i)}
                                    />
                                    </Grid>
                                    <Grid item xs={6} style={{paddingLeft:"20px"}}>
                                    <div className="btn-box">
                                    {FamilyallergyinputList.length - 1 === i && <Button onClick={handleFamilyAllergyAddClick}><AddCircleOutlineIcon/></Button>}
                                    {FamilyallergyinputList.length !== 1 && <Button
                                       
                                        onClick={() => handleFamilyAllergyRemoveClick(i)}><RemoveIcon/></Button>}
                                    </div>
                                    </Grid>
                                    </Grid>
                                </div>
                                );
                            })}
                            </div>
       <Typography  gutterBottom style={{marginBottom:"10px",marginTop:'10px'}} >
     Please indicate if any of your family member currently have a health condition or have had one in the past(please check all that apply)
      </Typography>
      <Multiselect
          style={{  chips: { background: "#01579b" }, searchBox: { marginBottom:"10px" }}}
          options={diseases}
          isObject={false}
          onSelect={Onselectfamilydisease}
          onRemove={onRemovefamilydisease}
        />
        <Typography gutterBottom>
     Other illnesses
      </Typography>
      <div >
              {  FamilydiseaseinputList.map((x, i) => {
                  return (
                  <div className="box">
                  <Grid container>
                  <Grid item xs={6}>
                      <TextField
                        variant='outlined'
                        fullWidth
                        style={{ marginBottom:"10px"}}
                      name="family_disease"
                      placeholder="Disease"
                      value={x.family_disease}
                      onChange={e => handleFamilyInputChange(e, i)}
                      
                      
                      />
                      </Grid>
                      <Grid item xs={6} style={{paddingLeft:"20px"}}>
                      <div className="btn-box">
                      {FamilydiseaseinputList.length - 1 === i && <Button onClick={handleFamilyAddClick}><AddCircleOutlineIcon/></Button>}
                      {FamilydiseaseinputList.length !== 1 && <Button
                          onClick={() => handleFamilyRemoveClick(i)}><RemoveIcon/></Button>}
                      </div>
                      </Grid>
                      </Grid>
                  </div>
                  );
              })}
                            </div>
      </FormGroup>
    </React.Fragment>
  );
}