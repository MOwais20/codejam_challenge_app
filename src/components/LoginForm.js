import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((res) => {
        console.log("🚀 ~ file: LoginForm.js:17 ~ .then ~ res", res);
        // localStorage.setItem("Auth Token", res._tokenResponse.refreshToken);

        // navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Username"
        defaultValue="Hello World"
      />

      <TextField
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-required"
        label="Password"
        defaultValue="Hello World"
      />
      <Button onClick={handleSubmit} variant="contained">
        Contained
      </Button>
    </Box>
  );
}
