import {
  Button,
  Form,
  Surface,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
  Switch,
  ListBox,
  Select,
} from "@heroui/react";
import { ThemeSwitch } from "./components/theme-switch";
import { FormEvent, useEffect, useState } from "react";

export default function ParamSelector() {
  const [advanceMode, setAdvanceMode] = useState(false);
  const [dietParams, setDietParams] = useState({ age: null, gender: null,weight_kg:null,exclusion:null,preferences:null,kcal_target:null,protein:null,carbs:null,fats:null});
  const [submitted,setSubmitted]=useState(false);
  useEffect(() => {
    console.log(dietParams,submitted);
  }, [dietParams,submitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="lg:w-2/4 w-3/4 flex flex-col md:flex-row gap-4">

          <Surface variant="default" className="p-8 rounded-3xl w-full">
            <h1 className="text-3xl font-bold mb-4">Enter data:</h1>
            <Form onSubmit={handleSubmit} className="gap-4 flex flex-col">
              <div className="flex gap-2">
                <TextField
                  isRequired
                  variant="secondary"
                  name="Age"
                  type="number"
                  className="w-2/4"
                >
                  <Label>Age</Label>
                  <Input
                    placeholder="Age"
                    min="1"
                    max="100"
                    onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        age: e.target.value,
                      }));
                    }}
                  />
                  <FieldError />
                </TextField>
                <TextField
                  variant="secondary"
                  isRequired
                  name="Weight"
                  type="number"
                  className="w-2/4"
                >
                  <Label>Weight</Label>
                  <Input placeholder="Weight(kg)" min="1" max="500" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        weight_kg: e.target.value,
                      }));
                    }}/>
                  <FieldError />
                  
                </TextField>
              </div>
                   <Select
                  isRequired
                  className="min-w-2/4"
                  variant="secondary"
                  placeholder="Select Gender"
                  value={dietParams.gender}
                  onChange={(e) =>
                    setDietParams((prev) => ({
                      ...prev,
                      gender: e,
                    }))
                  }
                >
                  <Label>Gender</Label>
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="male" textValue="Male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="female" textValue="Female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                  <FieldError />
                </Select>
              <TextField
                variant="secondary"
                isRequired
                name="Exclusions"
                type="text"
              >
                <Label>Alergies/Exclusions</Label>
                <Input placeholder="Alergies/Exclusions" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        exclusion: e.target.value,
                      }));
                    }}/>
                <FieldError />
              </TextField>
              <TextField
                variant="secondary"
                isRequired
                name="Preferences"
                type="text"
              >
                <Label>Preferences</Label>
                <Input placeholder="Preferences" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        preferences: e.target.value,
                      }));
                    }}/>
                <FieldError />
              </TextField>
              <Switch isSelected={advanceMode} onChange={setAdvanceMode}>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Content>
                  <Label className="text-sm">Advanced Mode</Label>
                </Switch.Content>
              </Switch>
              <div className={`${advanceMode ? "flex gap-2" : "hidden"}`}>
                <TextField
                  defaultValue="Ignore"
                  variant="secondary"
                  name="Kcal"
                  type="number"
                  className="w-1/4"
                >
                  <Label>Kcal</Label>
                  <Input placeholder="Kcal" min="1000" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        kcal_target: e.target.value,
                      }));
                    }}/>
                  <FieldError />
                </TextField>
                <TextField
                  defaultValue="Ignore"
                  variant="secondary"
                  name="Carbs"
                  type="number"
                  className="w-1/4"
                >
                  <Label>Carbs</Label>
                  <Input placeholder="Carbs" min="10" max="500" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        carbs: e.target.value,
                      }));
                    }}/>
                  <FieldError />
                </TextField>
                <TextField
                  defaultValue="Ignore"
                  variant="secondary"
                  name="Protein"
                  type="number"
                  className="w-1/4"
                >
                  <Label>Protein</Label>
                  <Input placeholder="Protein" min="55" max="500" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        protein: e.target.value,
                      }));
                    }}/>
                  <FieldError />
                </TextField>
                <TextField
                  defaultValue="Ignore"
                  variant="secondary"
                  name="Fat"
                  type="number"
                  className="w-1/4"
                >
                  <Label>Fat</Label>
                  <Input placeholder="Protein" min="10" max="100" onChange={(e) => {
                      setDietParams((prev) => ({
                        ...prev,
                        fats: e.target.value,
                      }));
                    }}/>
                  <FieldError />
                </TextField>
              </div>
              <div className="gap-2 flex w-full">
                <Button type="submit" className="w-full">
                  Submit
                </Button>
                <Button variant="secondary" type="reset" onClick={(e)=>{setSubmitted(false)}}>Reset</Button>
              </div>
            </Form>
          </Surface>
          
          <Surface className={`w-full md:w-3/4 mt-10 md:mt-0 p-8 rounded-3xl ${submitted?"":"hidden"}`}>
            <h1 className="text-2xl">Diet Plan:</h1>
          </Surface>
        </div>
      </div>
    </>
  );
}
