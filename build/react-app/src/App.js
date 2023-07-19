"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const material_1 = require("@mui/material");
const DeleteForever_1 = __importDefault(require("@mui/icons-material/DeleteForever"));
const notesRepo_1 = require("./repositories/notesRepo");
const listStyle = {
    width: '100%',
    bgcolor: 'background.paper',
};
function NoteList() {
    const notes = (0, notesRepo_1.getNotes)();
    console.log(notes);
    return (<material_1.List sx={listStyle} component="nav" aria-label="mailbox folders">
          <material_1.ListItem>
            <material_1.Grid container spacing={2}>
              <material_1.Grid item xs={4}>
                <material_1.ListItemText primary="Note thingy" secondary="2023-01-01" style={{ widows: '100%' }}/>
              </material_1.Grid>
              <material_1.Grid item xs={7}>
                <Typography_1.default variant="h6" component="h6" gutterBottom style={{ widows: '100%' }}>
                  This is a list of your notes and a note can get pretty long too.
                </Typography_1.default>
              </material_1.Grid>
              
              <material_1.Grid item xs={1}>
              <svg data-testid="DeleteIcon"></svg>
                <material_1.Button variant="outlined" color="error">
                  <DeleteForever_1.default />
                </material_1.Button>
              </material_1.Grid>
            </material_1.Grid>
            
          </material_1.ListItem>
          <material_1.Divider />
        </material_1.List>);
}
function App() {
    return (<Container_1.default maxWidth="md">
      <Box_1.default sx={{ my: 4 }}>
        <Typography_1.default variant="h4" component="h1" gutterBottom>
          This is a list of your notes
        </Typography_1.default>
        <NoteList />
      </Box_1.default>
    </Container_1.default>);
}
exports.default = App;
